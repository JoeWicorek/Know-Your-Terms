const websiteData = [
  {
    id: 1,
    name: 'Facebook',
    url: 'https://www.facebook.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png',
    rating: 'D',
    overallScore: 1.5,
    categories: ['Social Media', 'Advertising'],
    description: 'Facebook\'s Terms of Service are lengthy and complex, with numerous clauses about data collection and usage that may be difficult for the average user to fully understand.',
    criteria: {
      clarity: 2,
      transparency: 1,
      fairness: 1,
      accessibility: 2,
      accountability: 1
    }
  },
  {
    id: 2,
    name: 'Google',
    url: 'https://www.google.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
    rating: 'C',
    overallScore: 2.2,
    categories: ['Search Engine', 'Advertising'],
    description: 'Google\'s Terms of Service are relatively clear but still contain broad data collection policies that may not be immediately apparent to users.',
    criteria: {
      clarity: 3,
      transparency: 2,
      fairness: 2,
      accessibility: 3,
      accountability: 1
    }
  },
  {
    id: 3,
    name: 'Apple',
    url: 'https://www.apple.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
    rating: 'B',
    overallScore: 3.4,
    categories: ['Technology', 'Hardware', 'Software'],
    description: 'Apple\'s Terms of Service are better than most, with clearer language and more transparent data practices, though they still contain some complex legal terminology.',
    criteria: {
      clarity: 4,
      transparency: 3,
      fairness: 3,
      accessibility: 4,
      accountability: 3
    }
  },
  {
    id: 4,
    name: 'Amazon',
    url: 'https://www.amazon.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    rating: 'C',
    overallScore: 2.4,
    categories: ['E-commerce', 'Cloud Services'],
    description: 'Amazon\'s Terms of Service are quite lengthy and contain numerous clauses about data usage and third-party sharing that may be concerning to privacy-conscious users.',
    criteria: {
      clarity: 2,
      transparency: 2,
      fairness: 3,
      accessibility: 3,
      accountability: 2
    }
  },
  {
    id: 5,
    name: 'Twitter',
    url: 'https://twitter.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png',
    rating: 'C',
    overallScore: 2.6,
    categories: ['Social Media', 'News'],
    description: 'Twitter\'s Terms of Service have improved over time, but still contain broad rights to user content and data collection practices.',
    criteria: {
      clarity: 3,
      transparency: 3,
      fairness: 2,
      accessibility: 3,
      accountability: 2
    }
  },
  {
    id: 6,
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    rating: 'B',
    overallScore: 3.2,
    categories: ['Software', 'Cloud Services'],
    description: 'Microsoft has made efforts to simplify their Terms of Service and provide clearer explanations of data practices, though some policies remain complex.',
    criteria: {
      clarity: 3,
      transparency: 3,
      fairness: 3,
      accessibility: 4,
      accountability: 3
    }
  },
  {
    id: 7,
    name: 'Netflix',
    url: 'https://www.netflix.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
    rating: 'B',
    overallScore: 3.0,
    categories: ['Streaming', 'Entertainment'],
    description: 'Netflix\'s Terms of Service are relatively straightforward, though they do include some concerning clauses about content restrictions and account sharing.',
    criteria: {
      clarity: 3,
      transparency: 3,
      fairness: 3,
      accessibility: 3,
      accountability: 3
    }
  },
  {
    id: 8,
    name: 'Spotify',
    url: 'https://www.spotify.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png',
    rating: 'C',
    overallScore: 2.8,
    categories: ['Streaming', 'Music'],
    description: 'Spotify\'s Terms of Service contain some complex language around data collection and content restrictions that may be difficult for users to understand.',
    criteria: {
      clarity: 2,
      transparency: 3,
      fairness: 3,
      accessibility: 3,
      accountability: 3
    }
  },
  {
    id: 9,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/1200px-LinkedIn_logo_initials.png',
    rating: 'C',
    overallScore: 2.6,
    categories: ['Social Media', 'Professional'],
    description: 'LinkedIn\'s Terms of Service include broad data collection and usage rights that may surprise users who are not aware of how their professional data is being used.',
    criteria: {
      clarity: 3,
      transparency: 2,
      fairness: 2,
      accessibility: 3,
      accountability: 3
    }
  },
  {
    id: 10,
    name: 'TikTok',
    url: 'https://www.tiktok.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png',
    rating: 'F',
    overallScore: 1.2,
    categories: ['Social Media', 'Video Sharing'],
    description: 'TikTok\'s Terms of Service have been criticized for their extensive data collection practices and vague language around content moderation and user rights.',
    criteria: {
      clarity: 1,
      transparency: 1,
      fairness: 1,
      accessibility: 2,
      accountability: 1
    }
  }
];

export default websiteData;
