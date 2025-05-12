// map fn -> works only on array
import { faCode, faMobileAlt, faBrain, faRobot } from '@fortawesome/free-solid-svg-icons'

export const CourseListData = [
    {
        title: 'Full stack web development',
        description: 'Learn to build responsive, modern websites using HTML, CSS, JavaScript, and frameworks like React',
        destination: '/course/web-dev',
        icon: faCode
    },
    {
        title: 'Full stack app development',
        description: 'Create mobile applications for Android and iOS using tools like Flutter or React Native',
        destination: '/course/app',
        icon: faMobileAlt,
    },
    {
        title: 'Artifical Intelligence',
        description: 'Understand AI concepts including neural networks, NLP, and intelligent systems.',
        destination: '/course/ai',
        icon: faBrain,
    },
    {
        title: 'Machine Learning',
        description: 'Learn how to train models, handle data, and apply algorithms like regression and clustering.',
        destination: '/course/ml',
        icon: faRobot,
    }
]

import WebDevImage from '../assets/images/WebImage.png'
import AppDevImage from '../assets/images/AppImage.png'
import AIImage from '../assets/images/AIImage.png'
import MlImage from '../assets/images/MLImage.png'

export const EachCourseDetails = [
    {
      title: 'Full Stack Web Development',
      overview: 'Become a job-ready developer by mastering both front-end and back-end technologies to build and deploy full-stack web applications.',
      description: 'This comprehensive course guides you through the entire web development lifecycle—from creating static websites to deploying fully functional web applications. You’ll work with front-end tools like HTML, CSS, JavaScript, and React.js, while also mastering backend development using Node.js, Express.js, and MongoDB. The course emphasizes RESTful API design, version control with Git/GitHub, and real-world deployment strategies to ensure you’re industry-ready.',
      TechnologiesList: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTAPIs', 'Git', 'GitHub'],
      mainImg: WebDevImage,
      pdf: '/assets/coursePdf/web.pdf',
      duration: '3-6 months',
      fees: '25,000',
      whatWillYouLearn: [
        'Build responsive websites & SPAs',
        'Design RESTful APIs & backend logic',
        'Manage databases & deploy full-stack apps',
        'Collaborate using version control'
      ]
    },
    {
      title: 'Full Stack App Development',
      overview: 'Build cross-platform mobile apps for Android and iOS using powerful frameworks like Flutter and React Native.',
      description: 'This course is tailored for aspiring mobile developers who want to create scalable, high-performance apps for both Android and iOS. Starting from UI design with Flutter and Dart, you’ll learn to integrate Firebase for backend services, manage local storage using SQLite, and implement REST APIs. You’ll also gain experience with deployment practices and CI/CD pipelines to publish your apps efficiently.',
      TechnologiesList: ['Flutter', 'Dart', 'ReactNative', 'Firebase', 'SQLite', 'RESTAPIs', 'CI/CD'],
      mainImg: AppDevImage,
      pdf: '/assets/coursePdf/app.pdf',
      duration: '3-6 months',
      fees: '25,000',
      whatWillYouLearn: [
        'Create mobile UI with Flutter',
        'Integrate cloud backends with Firebase',
        'Store local data and manage app state',
        'Publish apps to Google Play & App Store'
      ]
    },
    {
      title: 'AI Intelligence',
      overview: 'Gain real-world experience in building intelligent systems using Python and popular AI libraries.',
      description: 'Dive into artificial intelligence by working on hands-on projects involving deep learning, NLP, and computer vision. This course introduces core AI concepts and takes you through implementing neural networks using TensorFlow and Keras. You’ll also explore real-world applications like face recognition, sentiment analysis, and object detection while learning how to handle datasets and fine-tune model performance.',
      TechnologiesList: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'NeuralNetworks', 'NLP', 'Computer Vision'],
      mainImg: AIImage,
      pdf: '/assets/coursePdf/ai.pdf',
      duration: '4-6 months',
      fees: '35,000',
      whatWillYouLearn: [
        'Train deep learning models',
        'Perform text and image classification',
        'Build chatbots and face recognition tools',
        'Work with datasets and evaluate model accuracy'
      ]
    },
    {
      title: 'Machine Learning',
      overview: 'Master machine learning techniques and tools to build, evaluate, and deploy predictive models.',
      description: 'This course offers a deep dive into machine learning, covering both theoretical foundations and practical implementation. You’ll explore supervised and unsupervised learning methods including regression, classification, and clustering. The curriculum also emphasizes data preprocessing, model evaluation, and deployment with MLOps practices. It’s designed for future data scientists and ML engineers aiming to make an impact in AI-driven industries.',
      TechnologiesList: ['Python', 'DataCleaning', 'FeatureEngineering', 'Regression', 'Classification', 'Clustering', 'MLOps', 'ModelDeployment'],
      mainImg: MlImage,
      pdf: '/assets/coursePdf/ml.pdf',
      duration: '4-6 months',
      fees: '35,000',
      whatWillYouLearn: [
        'Build prediction models from scratch',
        'Perform EDA & model evaluation',
        'Automate ML workflows',
        'Deploy models in real-time environments'
      ]
    }
];  