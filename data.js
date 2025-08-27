const courses = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Master the fundamentals of HTML, CSS, and JavaScript.',
    instructor: 'John Doe',
    image: 'https://placehold.co/400x250/14b8a6/fff?text=Web+Dev',
    pages: [
      {
        id: 1,
        courseId: 1,
        title: 'What is Web Development?',
        videoUrl: 'https://youtu.be/l1EssrLxt7E?si=YqzbHBIINVZQNXUj',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#14b8a6]">What is Web Development?</h2>
          <p>Web development is the work involved in developing a website for the Internet or an intranet.</p>
        `
      },
      {
        id: 2,
        courseId: 1,
        title: 'HTML: The Structure',
        videoUrl: 'https://www.youtube.com/embed/BsDoLVMnmZs',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#14b8a6]">HTML: The Structure of a Website</h2>
          <p>HTML (HyperText Markup Language) is the standard markup language for web documents.</p>
        `
      }
    ]
  },
  {
    id: 2,
    title: 'Python for Beginners',
    description: 'Learn the basics of Python programming and data structures.',
    instructor: 'Jane Smith',
    image: 'https://placehold.co/400x250/f59e0b/fff?text=Python',
    pages: [
      {
        id: 1,
        courseId: 2,
        title: 'Getting Started with Python',
        videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#f59e0b]">Getting Started with Python</h2>
          <p>Python is a high-level, interpreted, general-purpose programming language.</p>
        `
      },
      {
        id: 2,
        courseId: 2,
        title: 'Data Types and Variables',
        videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#f59e0b]">Data Types and Variables in Python</h2>
          <p>A variable is a container for a value. Python has several built-in data types.</p>
        `
      }
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing Fundamentals',
    description: 'Explore the core concepts of online marketing strategies.',
    instructor: 'Alex Johnson',
    image: 'https://placehold.co/400x250/60a5fa/fff?text=Marketing',
    pages: [
      {
        id: 1,
        courseId: 3,
        title: 'Introduction to Digital Marketing',
        videoUrl: 'https://youtu.be/h95cQkEWBx0?si=puyR47WDGEF23jCy',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#60a5fa]">Introduction to Digital Marketing</h2>
          <p>Digital marketing uses internet-based platforms to promote products and services.</p>
        `
      },
      {
        id: 2,
        courseId: 3,
        title: 'SEO Basics',
        videoUrl: 'https://www.youtube.com/embed/hF515-0Tduk',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#60a5fa]">SEO Basics</h2>
          <p>Search Engine Optimization (SEO) improves a website's visibility in search results.</p>
        `
      }
    ]
  },
  {
    id: 4,
    title: 'Graphic Design Principles',
    description: 'Learn the art of visual communication and design.',
    instructor: 'Emily White',
    image: 'https://placehold.co/400x250/f59e0b/fff?text=Design',
    pages: [
      {
        id: 1,
        courseId: 4,
        title: 'Elements of Design',
        videoUrl: 'https://www.youtube.com/embed/a5KYlHNKQB8',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#f59e0b]">Elements of Design</h2>
          <p>The elements of design are the fundamental components of any visual art form or design.</p>
        `
      }
    ]
  },
  {
    id: 5,
    title: 'Introduction to Data Science',
    description: 'Discover the world of data analysis and machine learning.',
    instructor: 'David Chen',
    image: 'https://placehold.co/400x250/60a5fa/fff?text=Data+Science',
    pages: [
      {
        id: 1,
        courseId: 5,
        title: 'What is Data Science?',
        videoUrl: 'https://www.youtube.com/embed/X3paOmcrTjQ',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#60a5fa]">What is Data Science?</h2>
          <p>Data science is an interdisciplinary field that extracts insights from structured and unstructured data.</p>
        `
      }
    ]
  },
  {
    id: 6,
    title: 'Financial Literacy 101',
    description: 'A guide to managing your personal finances effectively.',
    instructor: 'Sarah Lee',
    image: 'https://placehold.co/400x250/14b8a6/fff?text=Finance',
    pages: [
      {
        id: 1,
        courseId: 6,
        title: 'Budgeting Basics',
        videoUrl: 'https://www.youtube.com/embed/sVXsWCr1WPA',
        content: `
          <h2 class="text-2xl font-semibold mb-4 text-[#14b8a6]">Budgeting Basics</h2>
          <p>Basics on how to create and manage a budget.</p>
        `
      }
    ]
  }
];

const quizzes = [
  {
    id: 1,
    title: 'HTML & CSS Fundamentals Quiz',
    questions: [
      { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'], answer: 'HyperText Markup Language' },
      { question: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size'], answer: 'font-size' },
      { question: 'What is the correct HTML for creating a hyperlink?', options: ['<a>http://www.example.com</a>', '<a href="http://www.example.com">Example</a>', '<link>http://www.example.com</link>'], answer: '<a href="http://www.example.com">Example</a>' },
      { question: 'What is the correct CSS syntax to make all p elements bold?', options: ['p {font-weight:bold;}', 'p {text-style:bold;}', 'p.style = bold;'], answer: 'p {font-weight:bold;}' },
      { question: 'How can we change the background color of an element?', options: ['background-color', 'color', 'bg-color'], answer: 'background-color' },
      { question: 'What is the full form of CSS?', options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'], answer: 'Cascading Style Sheets' }
    ]
  },
  {
    id: 2,
    title: 'Python Basics Quiz',
    questions: [
      { question: 'Who developed Python Programming Language?', options: ['Guido van Rossum', 'Dennis Ritchie', 'James Gosling'], answer: 'Guido van Rossum' },
      { question: 'Which of the following is the correct extension of the Python file?', options: ['.py', '.python', '.p'], answer: '.py' },
      { question: 'What is the output of print(2 ** 3)?', options: ['8', '6', '9'], answer: '8' },
      { question: 'Which keyword is used to define a function in Python?', options: ['def', 'function', 'define'], answer: 'def' },
      { question: 'What does the len() function do?', options: ['Returns the length of an object', 'Returns the type of an object', 'Converts to string'], answer: 'Returns the length of an object' },
      { question: 'Is Python case sensitive when dealing with identifiers?', options: ['Yes', 'No'], answer: 'Yes' }
    ]
  }
];