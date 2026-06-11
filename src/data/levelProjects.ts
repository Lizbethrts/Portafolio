export const levelProjects = [
	{
		level: 'LEVEL_01',
		slug: 'learning-path-platform',
		title: 'Learning Path Platform',
		intro:
			'A digital learning experience designed to help educators access personalized training, practical resources, and community support.',
		tags: [
			'UX Research',
			'EdTech',
			'AI-Assisted Learning',
			'Learning Experience',
			'Dashboard Design',
		],
		metadata: [
			{ label: 'Type', value: 'EdTech / AI-Assisted Learning' },
			{ label: 'Impact', value: '6,000+ active teachers' },
			{ label: 'Recognition', value: '3rd Place · WISE 2025 Qatar' },
			{ label: 'Platform', value: 'Web, iOS and Android' },
		],
		impactMetrics: [
			{ value: '6,000+', label: 'Active Teachers' },
			{ value: '3rd Place', label: 'WISE 2025 Qatar' },
			{ value: 'Multi-platform', label: 'Web, iOS and Android' },
		],
		clientContext:
			'Client profile: an educational innovation foundation focused on teacher training for STEM and AI.',
		useCase:
			'The platform brought learning materials, curriculum management, delivery, and progress tracking into one connected web and mobile ecosystem so teachers could organize specialized STEM and AI content without moving between fragmented resources.',
		blockers: [
			'Learning materials were distributed across isolated channels, making it difficult to measure adoption and real impact.',
			'Teachers needed a centralized tool to organize their workflow without adding excessive administrative load.',
			'Teaching complex topics such as AI required an intuitive experience that could support content delivery and progress monitoring.',
			'There was limited visibility into curriculum progress and the effectiveness of STEM tool implementation in remote education contexts.',
		],
		deliveryScope: [
			'Mobile applications for Android and iOS optimized for agile content consumption.',
			'A web management portal for administrators to upload dynamic curricula and supervise program deployment.',
			'Tracking modules for teachers to record group progress and monitor the implementation of AI and STEM lessons.',
			'AI capabilities to support content organization and personalize the user experience.',
			'Firebase as backend infrastructure for user management and synchronization.',
		],
		whyMatters:
			'Teacher enablement works better when content, workflow, and access stay connected. This ecosystem combined custom software and AI-assisted capabilities into a multi-platform product used by 6,000+ active teachers and recognized globally at WISE 2025 Qatar.',
		missionBrief: [
			'The challenge was to design a digital platform that could support educators facing limited time, low access to updated resources, technology barriers, and professional isolation.',
			'The goal was not only to provide educational content, but to create a flexible learning ecosystem with personalized routes, accessible resources, community interaction, and AI-assisted feedback.',
		],
		problem: [
			'Many educators need continuous professional development, but face barriers such as lack of time, limited access to technology, poor connectivity, and difficulty integrating digital tools into their teaching practice.',
			'The product needed to respond to different levels of digital literacy and work in contexts where users might not always have stable internet access.',
			'The challenge was not only educational, but also emotional and practical: the experience had to feel useful, approachable, motivating, and realistic for users with different levels of confidence using digital tools.',
		],
		role: [
			'UX Research',
			'User Persona Definition',
			'Learning Route Structure',
			'Benchmark Analysis',
			'AI Prompt Exploration',
			'Dashboard Conceptualization',
			'Wireframe Direction',
			'Information Architecture',
			'Learning Experience Design',
		],
		process: [
			{
				title: 'Research & First Understanding',
				body: [
					'The first stage focused on understanding the real context of educators and identifying the main barriers they face in their professional development.',
					'We analyzed challenges such as lack of time, limited access to updated resources, low connectivity, lack of appropriate devices, and difficulty integrating digital tools into their teaching practice.',
					'This helped define the foundation of the platform: a solution that should not assume perfect digital access or unlimited time, but instead adapt to the user’s real environment.',
				],
			},
			{
				title: 'User Personas',
				body: [
					'We explored different educator profiles based on digital ability, motivation, access to technology, emotional needs, and learning goals.',
					'The personas helped us understand that users were not only different in terms of technical skills, but also in terms of confidence, expectations, frustrations, and available time.',
					'This stage reinforced the need to design a platform that could support both beginner and more advanced users without making the experience feel overwhelming.',
				],
			},
			{
				title: 'Learning Routes',
				body: [
					'The learning experience was structured around personalized routes instead of a generic content library.',
					'The route model followed three main phases: Engage -> Learn -> Practice.',
					'The goal was to guide users from initial interest to deeper understanding and finally to practical application in their teaching context.',
				],
			},
			{
				title: 'AI Strategy',
				body: [
					'We explored how artificial intelligence could support the platform by helping generate personalized learning routes, provide practical feedback, and adapt content to specific teaching contexts.',
					'The AI experience needed to be useful and understandable, not intimidating. For that reason, the focus was on clear prompts, contextual recommendations, and feedback that could help educators improve their practice.',
				],
			},
			{
				title: 'Dashboard & Metrics',
				body: [
					'We defined key indicators to measure the success of the experience, including platform usage, route completion, progress by user profile, participation in community spaces, feedback on resources, and evidence of classroom application.',
					'The dashboard concept was designed to connect learning progress with measurable impact, helping both users and administrators understand how the platform was being used and where improvements could be made.',
				],
			},
			{
				title: 'Wireframes & Structure',
				body: [
					'The platform structure was translated into wireframes focused on clarity, accessibility, and ease of use.',
					'The goal was to create an experience where users could quickly understand where they were, what they needed to do next, and how each part of the platform supported their learning journey.',
				],
			},
		],
		designDecisions: [
			'Personalized routes instead of generic content libraries.',
			'Offline-friendly and downloadable resources for low-connectivity contexts.',
			'Micro-learning structure to reduce cognitive load and respect users’ limited time.',
			'Community features to reduce professional isolation and encourage shared learning.',
			'AI-assisted feedback to make the experience more practical and adaptive.',
			'Dashboards to connect individual progress with measurable learning impact.',
			'Clear route stages to help users understand their learning journey.',
			'Accessible and simple navigation to support different levels of digital literacy.',
		],
		keyFeatures: [
			'Personalized learning paths',
			'Educator profile onboarding',
			'Micro-courses',
			'Downloadable resources',
			'Community support',
			'AI feedback',
			'Progress dashboard',
			'Impact metrics',
			'Learning route structure',
			'Practical classroom activities',
			'Evidence-based progress tracking',
		],
		outcome: [
			'This project helped me understand how UX can support education beyond interface design.',
			'The real challenge was designing a system that could adapt to different users, technological limitations, emotional needs, and learning contexts.',
			'I learned how important it is to design not just for completion, but for motivation, accessibility, confidence, and long-term engagement.',
			'The project also reinforced the value of creating digital experiences that are practical, human-centered, and flexible enough to work in real-world conditions.',
		],
		achievement: 'Systems Thinking + Accessible Learning UX',
	},
	{
		level: 'LEVEL_02',
		slug: 'digital-entertainment-redesign',
		title: 'Digital Entertainment Redesign',
		intro:
			'A mobile app redesign focused on improving navigation, trust, scalability, and discovery across multiple entertainment sections.',
		tags: [
			'Mobile UX',
			'App Redesign',
			'User Flow',
			'A/B Testing',
			'UI Components',
			'Entertainment Platform',
		],
		missionBrief: [
			'The project focused on redesigning an existing mobile app with an established user base.',
			'The challenge was to modernize the experience, improve usability, and integrate new entertainment sections without confusing existing users or disrupting the original core flow.',
			'The redesign needed to balance familiarity and innovation: keeping the experience trustworthy and simple while making it more dynamic, scalable, and engaging.',
		],
		problem: [
			'The original app already had recurring users and a consolidated purchase flow, but the interface needed to evolve.',
			'The main challenge was scalability. Adding new sections created a risk of visual overload, unclear navigation, and user confusion.',
			'The redesign needed to preserve user trust while introducing a more flexible structure, clearer navigation, stronger visual hierarchy, and better discovery across different sections of the app.',
		],
		role: [
			'UX Analysis',
			'Competitive Benchmarking',
			'Mystery Shopper Review',
			'User Flow Definition',
			'MVP Flow',
			'A/B Testing',
			'Low-Fidelity Wireframes',
			'High-Fidelity Wireframes',
			'Component Design',
			'Mobile UI Design',
			'Experience Optimization',
		],
		process: [
			{
				title: 'Context Analysis',
				body: [
					'The first step was to analyze the existing product and understand what needed to be preserved, improved, or expanded.',
					'Since the app already had an established user base, the redesign could not simply change everything. It needed to respect existing habits while improving clarity, scalability, and overall usability.',
					'This helped define the central design challenge: how to evolve the product without breaking user confidence.',
				],
			},
			{
				title: 'Mystery Shopper Review',
				body: [
					'A mystery shopper exercise was used to evaluate the app from the perspective of a real user.',
					'This helped identify friction points in navigation, discovery, promotional visibility, and the way users moved between different areas of the app.',
					'The findings revealed opportunities to make the experience more fluid, more intuitive, and better aligned with user expectations.',
				],
			},
			{
				title: 'Benchmarking',
				body: [
					'We analyzed direct and indirect competitors to understand how similar platforms handle navigation, trust, promotional content, engagement, and cross-discovery.',
					'The goal was to identify patterns that worked well, as well as risks to avoid, such as visual saturation, confusing navigation, or promotional elements that interrupted the main user flow.',
					'This stage helped define a direction that combined simplicity, trust, and a more engaging entertainment experience.',
				],
			},
			{
				title: 'MVP Flow',
				body: [
					'The MVP flow unified the main sections of the app into a single ecosystem.',
					'The experience started from a redesigned home screen where users could identify the main sections quickly and access key actions with fewer steps.',
					'The flow also explored how promotional banners and cross-navigation could encourage discovery without interrupting the original core experience.',
				],
			},
			{
				title: 'User Flow',
				body: [
					'The user flow prioritized quick recognition, fewer clicks, and consistency across sections.',
					'The goal was to make the app easier to understand from the first interaction, allowing users to move between different areas without feeling lost or overwhelmed.',
					'A clear structure was especially important because the product was expanding from a more focused experience into a broader digital entertainment platform.',
				],
			},
			{
				title: 'A/B Testing',
				body: [
					'Different home screen versions were explored to understand which layout better supported discovery, navigation, and engagement.',
					'The testing process helped compare alternatives and identify which version created a stronger balance between the original core flow and the new sections.',
					'The selected direction improved visibility, encouraged exploration, and maintained clarity.',
				],
			},
			{
				title: 'Wireframes & Components',
				body: [
					'Low-fidelity and high-fidelity wireframes were created to define structure, hierarchy, and interaction patterns.',
					'Reusable components were also designed to support scalability and maintain consistency across the app.',
					'This ensured that new sections could be integrated without making the interface feel fragmented or visually overloaded.',
				],
			},
		],
		designDecisions: [
			'Create a unified home screen as the main entry point.',
			'Use clear sections to reduce navigation confusion.',
			'Integrate promotional content without overwhelming the user.',
			'Maintain trust through visual consistency and familiar patterns.',
			'Improve cross-discovery between sections.',
			'Create scalable components for future growth.',
			'Simplify access to key flows and reduce unnecessary friction.',
			'Balance entertainment, trust, and usability in the visual system.',
		],
		keyFeatures: [
			'Redesigned home screen',
			'Clear section navigation',
			'Promotional banners',
			'Cross-selling flows',
			'Wallet access',
			'Recent purchases',
			'Reusable UI components',
			'High-fidelity mobile screens',
			'MVP flow',
			'User flow',
			'A/B tested home structure',
			'Scalable design system elements',
		],
		outcome: [
			'This project helped me understand how to redesign an existing product without breaking user trust.',
			'The most important challenge was balancing familiarity with innovation: making the interface feel more modern and engaging while keeping the experience simple, reliable, and easy to navigate.',
			'I learned the importance of designing scalable structures, especially when a product needs to grow beyond its original purpose.',
			'The project also reinforced how small decisions in navigation, hierarchy, and visual consistency can have a major impact on user confidence and exploration.',
		],
		achievement: 'Scalable Mobile UX + Flow Optimization',
	},
	{
		level: 'LEVEL_03',
		slug: 'ai-hiring-platform',
		title: 'AI Hiring Platform',
		intro:
			'A gamified recruitment platform designed to connect companies with hidden talent through skills-based matching, interactive assessments, and a more efficient hiring experience.',
		tags: [
			'HR Tech',
			'UI Design',
			'UX Support',
			'Gamified Recruitment',
			'Screen Design',
			'Platform UX',
		],
		metadata: [
			{ label: 'Type', value: 'HR Tech / Gamified Recruitment UX' },
			{ label: 'Role', value: 'UI Screen Design · UX Flow Support · Visual Consistency' },
			{ label: 'Difficulty', value: '★★★☆☆' },
			{ label: 'Contribution', value: 'Selected Screen Design + UI Iteration' },
		],
		contributionNote: [
			'I joined this project after the initial discovery phase. My contribution focused on designing, varying, and refining selected screens across the platform, using the existing research, user personas, customer journey work, and product direction as a foundation.',
		],
		missionBrief: [
			'The project focused on creating a digital platform that could simplify and accelerate the hiring process by connecting companies with suitable candidates through skills-based matching.',
			'The broader product vision was to reduce friction in recruitment, improve candidate-company alignment, and create a more engaging experience through gamification, data, and technology.',
			'Unlike projects where I participated from the initial discovery phase, my contribution in this level was focused on supporting the design process by creating and refining selected screens across the platform experience.',
		],
		problem: [
			'Traditional hiring processes can be slow, stressful, and inefficient for both candidates and companies.',
			'Candidates may struggle to find opportunities that match their real skills, while companies often need better tools to identify suitable talent, reduce hiring time, and make more informed decisions.',
			'The platform needed to support both sides of the hiring journey: candidates looking for opportunities and companies searching for talent.',
			'The challenge was to translate a complex recruitment ecosystem into screens that felt clear, intuitive, and visually consistent.',
		],
		projectContext: [
			'At the beginning of the project, the team aligned around the goal of creating a platform that could connect companies and talent more efficiently through technology, gamification, and skills-based evaluation.',
			'The product aimed to include an intuitive interface, skills-based hiring logic, interactive selection flows, real-time data, and transparency around the process.',
			'The team also defined a collaborative workflow based on sprint planning, backlog follow-up, sprint reviews, incremental releases, and shared documentation.',
		],
		systemOverview: [
			'Skills-based matching',
			'Gamified hiring',
			'Candidate profiles',
			'Company dashboard',
			'Data-driven decisions',
		],
		roleIntro:
			'My role was focused on supporting the design execution of selected screens. I helped translate product requirements and existing UX artifacts into interface proposals that aligned with the broader product direction.',
		role: [
			'UI Screen Design',
			'Screen Iteration',
			'UX Flow Support',
			'Visual Consistency',
			'Platform Screen Exploration',
			'Interface Layout Support',
			'Design Handoff Support',
		],
		processTitle: 'Quest Progress',
		process: [
			{
				title: 'Understanding the Product Direction',
				body: [
					'Before designing screens, I reviewed the general product context, including the platform goals, target users, expected flows, and main product features.',
					'The platform was intended to support a more efficient hiring process through candidate-company matching, skills-based evaluation, gamified interactions, and data-driven decision-making.',
				],
			},
			{
				title: 'Reviewing UX Foundations',
				body: [
					'The project included workshops to define and validate user personas. These personas helped the team understand different user profiles, motivations, challenges, and behaviors in relation to the hiring process.',
				],
			},
			{
				title: 'Understanding the Customer Journey',
				body: [
					'The team also worked on Customer Journey Mapping to understand the experience from the perspective of both candidates and companies.',
					'The CJM helped identify user emotions, challenges, expectations, touchpoints, friction points, and opportunities for improvement throughout the job search and hiring process.',
				],
			},
			{
				title: 'Screen Design Contribution',
				body: [
					'My main contribution was creating and refining selected screens that supported different moments of the platform experience.',
					'The goal was to make the screens clearer, more usable, and visually aligned with the product concept.',
				],
			},
			{
				title: 'Visual Consistency',
				body: [
					'Because the platform had multiple flows and user types, consistency was important.',
					'I worked on keeping interface patterns, spacing, hierarchy, and visual structure aligned so that the experience felt cohesive across different screens.',
				],
			},
		],
		artifactsIntro:
			'Research and design artifacts that helped shape the platform experience.',
		artifactPlaceholders: [
			{
				title: 'Product Kickoff',
				label: 'Research Artifact',
				description:
					'The kickoff helped align the team around the platform vision, collaboration model, product goals, and main challenges of building a gamified hiring experience.',
				alt: 'Project kickoff artifact for AI hiring platform',
			},
			{
				title: 'User Personas',
				label: 'Research Artifact',
				description:
					'The User Personas workshop helped validate user profiles, motivations, challenges, behaviors, and problem statements to better align the platform with real hiring needs.',
				alt: 'User personas workshop artifact',
			},
			{
				title: 'Customer Journey Map',
				label: 'Research Artifact',
				description:
					'The Customer Journey Map helped identify emotions, touchpoints, friction points, and opportunities across the candidate and company hiring experience.',
				alt: 'Customer journey map workshop artifact',
			},
			{
				title: 'Selected Screen Contributions',
				label: 'Screen Contribution',
				description:
					'These screens represent the parts of the platform where I contributed through UI exploration, screen variation, and visual refinement.',
				alt: 'Selected UI screen contribution',
			},
		],
		designDecisions: [
			'Support a clear and intuitive interface for both candidates and companies.',
			'Create screen layouts that help simplify complex hiring flows.',
			'Use visual hierarchy to make key actions easier to identify.',
			'Keep the platform experience consistent across different modules.',
			'Support gamified recruitment without making the experience feel confusing.',
			'Design screens that could scale across candidate and company journeys.',
			'Translate user research and journey insights into clearer interface decisions.',
		],
		keyFeaturesTitle: 'Features Supported',
		keyFeatures: [
			'Candidate profile screens',
			'Company-facing screens',
			'Registration or onboarding flows',
			'Search or matching-related screens',
			'Question / quiz-related flows',
			'Candidate information screens',
			'Dashboard or platform module screens',
			'Gamified hiring interactions',
			'Screen variations and UI iterations',
		],
		outcomeTitle: 'Level Complete',
		outcome: [
			'This project helped me understand how complex HR technology products require both strategic thinking and careful UI execution.',
			'Even though I was not part of the project from the beginning, contributing to selected screens helped me practice adapting to an existing product direction, understanding previous research, and designing within a broader platform vision.',
			'I learned the importance of maintaining visual consistency across complex flows and making sure each screen supports the user’s next step clearly.',
			'This level also strengthened my ability to contribute to an ongoing design process, quickly understand product context, and turn requirements into usable interface proposals.',
		],
		achievement: 'HR Tech UX + Screen Design Contribution',
	},
	{
		level: 'LEVEL_04',
		slug: 'traditional-food-brand-website',
		title: 'Traditional Food Brand Website',
		intro:
			'A website experience created to present a traditional food brand, its locations, history, menu, and services through a clear and visually recognizable digital presence.',
		tags: [
			'Web Design',
			'Brand Experience',
			'Visual Design',
			'Food & Beverage',
			'Interface Layout',
			'Responsive Web',
		],
		metadata: [
			{ label: 'Type', value: 'Web Design / Brand Experience' },
			{
				label: 'Role',
				value: 'Web Screen Design · Visual Layout Support · Brand Consistency',
			},
			{ label: 'Difficulty', value: '★★★☆☆' },
			{ label: 'Contribution', value: 'Selected Web Screen + Visual Layout Support' },
		],
		contributionNote: [
			'I participated in this project as part of the web design process. Since I was not responsible for the full project from beginning to end, I present this level as a web screen and visual layout contribution.',
			'My work focused on supporting selected screens, visual structure, and interface consistency within the broader website experience.',
		],
		missionBrief: [
			'The project focused on creating a web experience for a traditional food brand with a strong cultural identity.',
			'The main goal was to help users learn more about the brand, explore its locations, understand its services, and access key information in a simple and visually consistent way.',
			'My contribution was part of the web creation process, supporting the design and layout of selected screens and helping maintain a clear visual structure aligned with the brand’s identity.',
		],
		problem: [
			'Food and beverage brands with a strong offline presence need digital experiences that communicate trust, tradition, and accessibility.',
			'Users visiting the website need to quickly understand what the brand offers, where they can visit, and how to access relevant information such as menu, locations, history, catering, and contact options.',
			'The challenge was to create a website that felt clear and functional while preserving the visual personality and traditional character of the brand.',
		],
		projectContext: [
			'The website needed to present key brand information in a structured and accessible way.',
			'The experience included sections such as menu, locations, history, catering, language options, and informational footer links.',
			'The visual direction followed a traditional Mexican-inspired identity with a clean editorial layout, strong color contrast, and recognizable brand elements.',
		],
		systemOverview: [
			'Menu',
			'Locations',
			'History',
			'Catering',
			'Language switch',
			'Footer information',
		],
		roleIntro:
			'My role was focused on supporting selected web screens and helping organize interface content in a way that felt readable, visually consistent, and aligned with the brand identity.',
		role: [
			'Web Screen Design',
			'Visual Layout Support',
			'Interface Structure',
			'Brand Consistency',
			'Information Layout',
			'Responsive Web Thinking',
			'Visual Hierarchy Support',
		],
		processTitle: 'Quest Progress',
		process: [
			{
				title: 'Understanding the Website Purpose',
				body: [
					'The first step was understanding that the website needed to work as a digital entry point for users who wanted to know the brand, find locations, and access basic service information.',
					'The design needed to make information easy to scan while keeping the personality of the brand visible.',
				],
			},
			{
				title: 'Organizing Key Information',
				body: [
					'The website required clear navigation between different types of content, including menu, locations, history, and catering.',
					'For the locations page, the information needed to be structured by country, city, branch name, address, and opening hours.',
				],
			},
			{
				title: 'Supporting Visual Layout',
				body: [
					'My contribution focused on selected screens and layout support.',
					'The goal was to make the pages feel organized, readable, and aligned with the brand’s visual language.',
				],
			},
			{
				title: 'Preserving Brand Identity',
				body: [
					'Because the brand had a strong traditional and recognizable identity, the interface needed to feel consistent with that visual world.',
					'The layout used bold color blocks, clean spacing, strong typography, and image-based location cards to balance tradition and clarity.',
				],
			},
			{
				title: 'Screen Refinement',
				body: [
					'I supported the design process by helping refine selected screens and organizing content in a way that made the experience easier to navigate.',
				],
			},
		],
		artifactsIntro:
			'Screens and visual references that show the web experience.',
		artifactPlaceholders: [
			{
				title: 'Locations Page',
				label: 'Web Screen',
				description:
					'A location-focused page designed to help users explore branches across Mexico and the United States, using photography, addresses, schedules, and clear regional grouping.',
				alt: 'Locations page screenshot for traditional food brand website',
			},
		],
		designDecisions: [
			'Use a clear navigation structure to help users find key sections quickly.',
			'Organize locations by region to improve scanning and readability.',
			'Combine photography with branch information to make locations easier to recognize.',
			'Maintain a strong brand color presence throughout the page.',
			'Use visual hierarchy to separate branch names, addresses, and schedules.',
			'Keep the layout simple and content-focused to support quick decision-making.',
			'Support bilingual navigation for broader accessibility.',
		],
		keyFeaturesTitle: 'Features Supported',
		keyFeatures: [
			'Brand website structure',
			'Navigation menu',
			'Locations page',
			'Branch cards',
			'Address and schedule information',
			'Footer information',
			'Language switch',
			'Image-supported content blocks',
			'Responsive web layout thinking',
		],
		outcomeTitle: 'Level Complete',
		outcome: [
			'This project helped me understand how web design can support brand presence beyond aesthetics.',
			'A website for a traditional food brand needs to communicate identity, trust, and practical information at the same time.',
			'Even though my contribution was focused on selected parts of the website, the project helped me practice visual layout, brand consistency, and information organization for a real digital experience.',
		],
		achievement: 'Brand Web Experience + Visual Layout Support',
	},
	{
		level: 'LEVEL_05',
		slug: 'fixia-service-platform',
		title: 'FIXIA Service Platform',
		intro:
			'A home-service platform concept designed to help users diagnose household problems, compare verified technicians, and book repairs with more confidence.',
		tags: [
			'Service Marketplace',
			'UX Research',
			'Mobile App',
			'Web Platform',
			'Trust & Safety',
			'AI-Assisted Diagnosis',
		],
		metadata: [
			{ label: 'Type', value: 'Home Services / Marketplace UX' },
			{ label: 'Platform', value: 'Mobile app + responsive web prototype' },
			{ label: 'Focus', value: 'Trust, diagnosis, booking, and service clarity' },
			{ label: 'Prototype', value: 'FIXIA V1 deployed on Vercel' },
		],
		impactMetrics: [
			{ value: '42.5%', label: 'Main concern: not knowing if a technician is trustworthy' },
			{ value: '83%', label: 'Would pay, at least conditionally, for the service' },
			{ value: '23.2%', label: 'Value verified technicians most when paying' },
		],
		clientContext:
			'Project context: a product concept for CDMX users who need reliable home repair services and technicians who need a steadier flow of verified clients.',
		useCase:
			'FIXIA helps users describe a home problem, understand what type of technician they need, compare verified profiles, review estimated prices, request service, track the visit, pay safely, and rate the experience.',
		blockers: [
			'Users often misdiagnose home problems and may hire the wrong professional.',
			'Trust is fragile because people worry about informal technicians, unclear prices, low quality work, and lack of guarantees.',
			'Service requests can feel slow or uncertain when users cannot see who is coming, how long it will take, or what the estimated cost might be.',
			'Independent technicians need more consistent access to verified customers, especially in a market with high informal labor.',
		],
		deliveryScope: [
			'A web prototype that simulates choosing a service, viewing verified technicians, checking ratings, and confirming a request.',
			'A mobile app concept with service categories, common problems, nearby professionals, and a friendly diagnostic entry point.',
			'Trust signals such as technician photos, verified badges, arrival estimates, ratings, reviews, and service guarantees.',
			'AI-assisted initial diagnosis to help users understand what kind of technician they may need before booking.',
			'A roadmap for pilot operation, technician onboarding, NPS tracking, real payments, express services, and future memberships.',
		],
		whyMatters:
			'Home repairs are emotional because they happen inside personal spaces and often begin with urgency or uncertainty. FIXIA turns the request into a clearer sequence: diagnose, compare, trust, book, follow up, and pay.',
		missionBrief: [
			'The project explored how to create a faster, clearer, and safer way to request technical services for the home. The goal was to reduce uncertainty before the visit and help users feel confident about who they were hiring.',
			'Research showed that homeowners struggle to identify the right expert, worry about trust, and value online booking, technician identity, transparent pricing, and real-time updates.',
			'The challenge was to design a marketplace experience that could support both sides: users looking for reliable repairs and technicians looking for verified service opportunities.',
		],
		problem: [
			'Many users do not know what type of professional they need when something breaks at home. This can lead to procrastination, wrong hires, excessive charges, or repeated service attempts.',
			'Survey insights showed that trust was the biggest concern when hiring services, followed by finding nearby providers, work quality, excessive charges, and lack of guarantee or speed.',
			'The product needed to make the invisible parts of the service feel visible: who is coming, why they are qualified, when they arrive, what it may cost, and what happens after the service is completed.',
		],
		role: [
			'UX Research',
			'Survey Insight Analysis',
			'User Persona',
			'Empathy Map',
			'Customer Journey Map',
			'Mobile UI Design',
			'Web Prototype Design',
			'Trust Signal Design',
		],
		process: [
			{
				title: 'Research Context',
				body: [
					'The team started by studying the problems people face when hiring home-service professionals: late arrivals, unclear prices, lack of updates, low professionalism, and uncertainty about who to trust.',
					'The research also considered the technician side, especially the economic reality of informal work and the need for a steady flow of verified clients.',
				],
			},
			{
				title: 'Problem Framing',
				body: [
					'The problem-framing questions focused on helping users identify the right technician, feel safe before receiving someone at home, and move from request to payment in a faster and clearer way.',
					'The hypotheses centered on diagnosis, technician visibility, transparent pricing, and real-time communication as trust builders for first-time use.',
				],
			},
			{
				title: 'Survey Insights',
				body: [
					'The survey showed that the biggest hiring problem was not knowing whether a technician is trustworthy. Users also worried about nearby availability, work quality, excessive charges, and lack of guarantee.',
					'When asked what they would value enough to pay for, users prioritized verified technicians, reviews, secure payments, service guarantees, transparent prices, and faster attention.',
				],
			},
			{
				title: 'User Journey',
				body: [
					'The journey mapped the user from recognizing a home problem to describing it, comparing options, requesting service, tracking the technician, paying, and rating the visit.',
					'This clarified where the product needed to reduce anxiety: diagnosis, technician selection, price expectation, confirmation, and post-service trust.',
				],
			},
			{
				title: 'Prototype Strategy',
				body: [
					'The prototype was designed to validate the main flow: choosing a service, seeing verified technicians, receiving an initial diagnosis, reviewing an estimated price, and confirming the request.',
					'Mobile and desktop mockups were used to communicate how the experience could work across service browsing, technician comparison, and quick booking.',
				],
			},
		],
		designDecisions: [
			'Use verified badges, photos, ratings, and arrival estimates to reduce trust friction.',
			'Prioritize common household problems so users can start without knowing technical terminology.',
			'Include a diagnostic assistant as an entry point before booking.',
			'Show price ranges and service filters to make comparison feel clear and controlled.',
			'Design technician cards with service tags, experience, rating, and response time.',
			'Support both mobile-first requests and desktop comparison for browsing multiple professionals.',
			'Keep the visual system professional, calm, and service-oriented instead of alarm-based.',
		],
		keyFeatures: [
			'AI-assisted diagnosis',
			'Verified technicians',
			'Technician photos',
			'Ratings and reviews',
			'Arrival estimates',
			'Service categories',
			'Common problem shortcuts',
			'Transparent price range',
			'Secure payment flow',
			'Service guarantee',
			'Mobile app V1',
			'Responsive web prototype',
		],
		outcome: [
			'FIXIA helped me practice designing trust into a service marketplace where the user is not only buying a task, but inviting someone into their home.',
			'The project strengthened my understanding of how research insights can shape concrete interface decisions such as verified profiles, pricing clarity, diagnosis support, and service follow-up.',
			'It also helped me think about feasibility beyond the screen: technician onboarding, verification, payments, operations, support, and future growth through pilots and partnerships.',
		],
		achievement: 'Trust-Centered Marketplace UX + AI Service Flow',
	},
] as const;

export type LevelProject = (typeof levelProjects)[number];
