import os
import requests

# GitLab API configuration
GITLAB_API_BASE = "https://code.europa.eu/api/v4"
PROJECT_PATH = "p2b/contrib-versions"  # Replace with your project path
BRANCH = "main"  # Replace with your branch name
TOKEN = "your_gitlab_token"  # Add your GitLab personal access token here (if required)

HEADERS = {
    "Private-Token": TOKEN,  # Include token for private repositories
}

# Directory to save files locally
DOWNLOAD_DIR = "./gitlab_repo"


def get_project_id(project_path):
    """Get the project ID from the project path."""
    url = f"{GITLAB_API_BASE}/projects"
    response = requests.get(url, headers=HEADERS, params={"search": project_path})
    response.raise_for_status()
    projects = response.json()
    for project in projects:
        if project["path_with_namespace"] == project_path:
            return project["id"]
    raise ValueError("Project not found!")


def fetch_repository_tree(project_id, branch="main", path=""):
    """Fetch the repository tree."""
    url = f"{GITLAB_API_BASE}/projects/{project_id}/repository/tree"
    response = requests.get(
        url,
        headers=HEADERS,
        params={"ref": branch, "path": path, "recursive": True},
    )
    response.raise_for_status()
    return response.json()


def download_file(file_url, local_path):
    """Download a file from GitLab."""
    response = requests.get(file_url, headers=HEADERS, stream=True)
    response.raise_for_status()
    with open(local_path, "wb") as file:
        for chunk in response.iter_content(chunk_size=8192):
            file.write(chunk)
    print(f"Downloaded: {local_path}")


def process_files(project_id, tree, base_dir):
    """Process the files in the repository tree."""
    for item in tree:
        file_path = os.path.join(base_dir, item["path"])
        if item["type"] == "tree":
            # Create directory if it doesn't exist
            if not os.path.exists(file_path):
                os.makedirs(file_path)
            print(f"Created directory: {file_path}")
        elif item["type"] == "blob":
            # Download file if it doesn't exist or has been updated
            file_url = f"{GITLAB_API_BASE}/projects/{project_id}/repository/files/{item['path']}/raw?ref={BRANCH}"
            if not os.path.exists(file_path) or os.path.getsize(file_path) != item["size"]:
                download_file(file_url, file_path)
            else:
                print(f"File is up-to-date: {file_path}")


def main():
    """Main function to fetch and download files."""
    if not os.path.exists(DOWNLOAD_DIR):
        os.makedirs(DOWNLOAD_DIR)

    print("Fetching project ID...")
    project_id = get_project_id(PROJECT_PATH)

    """print("Fetching repository tree...")
    tree = fetch_repository_tree(project_id, BRANCH)

    print("Processing files...")
    process_files(project_id, tree, DOWNLOAD_DIR)
    """

if __name__ == "__main__":
    main()
