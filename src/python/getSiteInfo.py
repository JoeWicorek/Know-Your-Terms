import os
import re
import openai
from dotenv import load_dotenv
from langdetect import detect, DetectorFactory

load_dotenv()

# Set seed for consistent language detection
DetectorFactory.seed = 0

# Set up OpenAI API Key
#openai.api_key = os.getenv('OPEN_AI_API_KEY')
openai.api_key = "your api key here"


# Function to check if the folder name matches the criteria
def is_valid_folder(folder_name):
    return ".com" in folder_name or "." not in folder_name

# Function to check if the text is in English
def is_english(text):
    try:
        detected_lang = detect(text)
        return detected_lang == "en"
    except Exception as e:
        print(f"Language detection failed: {e}")
        return False

# Function to split text into sentences
def split_into_sentences(text):
    return re.split(r'(?<=[.!?]) +', text)

# Function to evaluate a category and extract top 3 reasons
def evaluate_all_categories(text):
    try:
        response = openai.ChatCompletion.create(
        model= "gpt-4o",
        messages=[
            {"role": "system", "content": "You are a legal assistant trained to analyze terms of service documents."},
            {"role": "user", "content": "Evaluate the following terms of service text based on these categories: "
                                    "Clarity and Simplicity, Data Privacy and Security, Control Over Data and Account, "
                                    "Fairness of Policies, Transparency on Changes. "
                                    "Assign a a grade (A+ to F) for each category and exmplain the top 3 reasons for the grade. "
                                    "Each reason should clearly describe what aspect of the text influenced the grade.\n\n"
                                    f"Text:\n{text}\n\n"
                                    "Provide the output in the format: Grade: [GRADE]. Reasons: [1. Reason 1, 2. Reason 2, 3. Reason 3]."}
        ],
        max_tokens=3000,
        temperature=0.7,
        n=1
        )
       
        content = response["choices"][0]["message"]["content"].strip()
        # Use the parse_response function
        category_grades, category_reasons = parse_response(content)

        # Debugging logs
        print("Raw GPT Response:", content)
        print(category_grades)
        print(category_reasons)
        return category_grades, category_reasons
    except Exception as e:
        print(f"Error during evaluation: {e}")
        return "F", ["Error in generating reasons."]

def parse_response(response_text):
    category_grades = {}
    category_reasons = {}
    current_category = None

    lines = response_text.strip().split("\n")

    for line in lines:
        line = line.strip()

        # Detect categories (e.g., **Clarity and Simplicity**)
        if line.startswith("**") and line.endswith("**") and "Grade" not in line:
            current_category = line.strip("**").strip()
            category_grades[current_category] = None  # Placeholder for grade
            category_reasons[current_category] = []  # Placeholder for reasons

        # Detect grades (e.g., Grade: C)
        elif "Grade:" in line:
            grade = line.split("Grade:")[-1].strip().split("**")[0].strip()
            if current_category:
                category_grades[current_category] = grade

        # Detect reasons (e.g., numbered list 1., 2., 3.)
        elif line.startswith(("1.", "2.", "3.")) and current_category:
            reason_text = line.split(". ", 1)[-1].strip()  # Extract reason text after the number
            category_reasons[current_category].append(reason_text)

    # Debugging output
    print("Parsed Grades:", category_grades)
    print("Parsed Reasons:", category_reasons)

    return category_grades, category_reasons


# Calculate overall grade
def calculate_overall_grade(category_grades, weights):
    total_score = 0.0
    total_weight = 0.0
    grade_to_numeric = {
        "A+": 4.3, "A": 4.0, "A-": 3.7,
        "B+": 3.3, "B": 3.0, "B-": 2.7,
        "C+": 2.3, "C": 2.0, "C-": 1.7,
        "D+": 1.3, "D": 1.0, "D-": 0.7,
        "F": 0.0,
    }

    for category, grade in category_grades.items():
        numeric_value = grade_to_numeric.get(grade, 0.0)
        print(category,numeric_value)
        weight = weights.get(category, 1)
        total_score += numeric_value * weight
        total_weight += weight

    overall_score = round(total_score / total_weight,1)
    print(overall_score)

    numeric_to_grade = {
        4.3: "A+", 4.0: "A", 3.7: "A-",
        3.3: "B+", 3.0: "B", 2.7: "B-",
        2.3: "C+", 2.0: "C", 1.7: "C-",
        1.3: "D+", 1.0: "D", 0.7: "D-",
        0.0: "F",
    }
    
    # Determine the closest matching grade
    grade_keys = sorted(numeric_to_grade.keys(), reverse=True)
    for key in grade_keys:
        if overall_score >= key:
            return numeric_to_grade[key]
    return "F"

# Main function for analyzing terms of service
def analyze_terms_in_folders(parent_folder):
    categories = [
        "Clarity and Simplicity",
        "Data Privacy and Security",
        "Control Over Data and Account",
        "Fairness of Policies",
        "Transparency on Changes",
    ]

    weights = {
        "Clarity and Simplicity": 0.2,
        "Data Privacy and Security": 0.3,
        "Control Over Data and Account": 0.2,
        "Fairness of Policies": 0.2,
        "Transparency on Changes": 0.1,
    }

    results = {}
    success = True

    try:
        for folder_name in os.listdir(parent_folder):
            folder_path = os.path.join(parent_folder, folder_name)

            # Skip invalid folders
            if not os.path.isdir(folder_path) or not is_valid_folder(folder_name):
                continue

            # Generate the domain attribute
            domain = folder_name if ".com" in folder_name else f"{folder_name}.com"

            for root, _, files in os.walk(folder_path):
                for file in files:
                    if "terms of service" in file.lower():
                        file_path = os.path.join(root, file)
                        print(f"Analyzing: {file_path}")

                        with open(file_path, "r", encoding="utf-8") as f:
                            terms_text = f.read()

                        # Skip non-English files
                        if not is_english(terms_text):
                            print(f"Skipping non-English file: {file_path}")
                            continue

                        text_chunks = split_into_sentences(terms_text)
                        text = " ".join(text_chunks) 

                        category_grades = {}
                        category_reasons = {}

                    # Single API call for all categories
                        category_grades, category_reasons = evaluate_all_categories(text)
                        print(category_grades)
                        print(category_reasons)
                        # Calculate the overall grade
                        if category_grades:
                            overall_grade = calculate_overall_grade(category_grades, weights)
                        else:
                            overall_grade = "N/A"

                        # Save the results
                        results[folder_name] = {
                            "domain": domain,
                            "folderName": folder_name,
                            "overallGrade": overall_grade,
                            "categories": {
                                category:{
                                    "grade": category_grades.get(category, "N/A"),
                                    "reasons": category_reasons.get(category,[]),
                                }
                                for category in categories
                            }
                        }
                        return results
    except Exception as e:
        print(f"Error analyzing folder {parent_folder}: {e}")
        success = False
    return results if success else None

# Run the program
if __name__ == "__main__":
    parent_folder = r"C:\Users\Tom\Desktop\ClientDev\contrib-versions-main"

    if os.path.isdir(parent_folder):
        evaluation_results = analyze_terms_in_folders(parent_folder)

        # Display results clearly
        for folder, result in evaluation_results.items():
            print(f"\nFolder: {result['folderName']}")  # Folder name
            print(f"Domain: {result['domain']}")  # Domain name
            print(f"Overall Grade: {result['overallGrade']}")  # Overall grade
        
        # Loop through categories
            for category, category_data in result["categories"].items():
                print(f"  {category}: {category_data['grade']}")
                reasons = category_data["reasons"]
                if reasons:
                    print("  Top 3 Reasons:")
                    for i, reason in enumerate(reasons, start=1):
                        print(f"    {i}. {reason}")
                else:
                    print("  Top 3 Reasons: None provided.")

    else:
        print("The specified path is not a valid directory.")
