const data = [
    {
        'What platform?': [
            'iOS',
            'Android',
            'Both'
        ]
    },
    {
        'What is your app about?': [
            'Hardware, IoT',
            'Ecommerce / Retail',
            'Booking',
            'Education',
            'Social networking',
            'Events ',
            'Tools / Utilities',
            'Medtech / Healthcare',
            'Artificial Intelligence (AI)',
            'Maps & Navigation',
            'Lifestyle & Hobby',
            'Other'
        ]
    },
    {
        'What about design?': [
            'Basic',
            'Polished',
            'I already have'
        ]
    },
    {
        'Choose devices for your app': [
            'Smartphones',
            'Tablets',
            'Smartwatch',
            'Desktop'
        ]
    },
    {
        'Do users have to login?': [
            'via E-mail',
            'via Social Network',
            'None'
        ]
    },
    {
        'Do you need built-in payments?': [
            'Payment processing',
            'In-App Purchasing',
            'None'
        ]
    },
    {
        'Do you need geolocation feature?': [
            'Simple',
            'Advanced',
            'None'
        ]
    },
    {
        'Will you have a newsfeed?': [
            'Simple',
            'Custom',
            'None'
        ]
    },
    {
        'Will your project have any list of items or goods?': [
            'Yes - simple',
            'Yes - advanced (with categories & filters, etc)',
            'None'
        ]
    },
    {
        'Do you need a communications feature?': [
            'Simple (User-to-user)',
            'Advanced (Group Chat, Postponed Delivery, etc.)',
            'None'
        ]
    },
    {
        'Any event-planning tools?': [
            'Calendar',
            'Tickets management',
            'Appointments scheduling',
            'None'
        ]
    },
    {
        'Choose the type of content?': [
            'Photo',
            'Video / Audio',
            'Streaming ',
            'None'
        ]
    },
    {
        'How will you engage with your users?': [
            'Ratings',
            'Polls / Forms',
            'None'
        ]
    },
    {
        'Do you need push notifications?': [
            'Basic',
            'Custom',
            'None'
        ]
    },
    {
        'What kind of analytics data will you track?': [
            'Basic',
            'Advanced',
            'None'
        ]
    },
    {
        'Do you need an admin panel?': [
            'Yes',
            'No'
        ]
    },
    {
        'Need a user managing tool?': [
            'Basic',
            'Custom',
            'None'
        ]
    }
]


var shotHand = {
    'platform': '',
    'about app': [],
    'design': '',
    'devices': [],
    'users login': '',
    'payments': '',
    'geolocation feature': '',
    'newsfeed': '',
    'items or goods': '',
    'communication features': '',
    'planning': [],
    'content type': [],
    'users engage': [],
    'push notification': '',
    'data track': '',
    'admin panel': '',
    'managing tool': '',
    'first name': '',
    'last name': '',
    'company': '',
    'job title': '',
    'email': '',
    'phone': '',
    'text': '',
    'start': ''
}

const bigForm = [
    'What platform?',
    'What is your app about?',
    'What about design?',
    'Choose devices for your app',
    'Do users have to login?',
    'Do you need built-in payments?',
    'Do you need geolocation feature?',
    'Will you have a newsfeed?',
    'Will your project have any list of items or goods?',
    'Do you need a communications feature?',
    'Any event-planning tools?',
    'Choose the type of content?',
    'How will you engage with your users?',
    'Do you need push notifications?',
    'What kind of analytics data will you track?',
    'Do you need an admin panel?',
    'Need a user managing tool?'
]

const formContent = [
    'First Name',
    'Last Name',
    'Company',
    'Job Title',
    'Email'
]

const data1 = [
    {
        'What is your project about?': [
            'AdTech / MarTech',
            'Artificial Intelligence (AI)',
            'Booking',
            'Ecommerce / Retail',
            'Education',
            'Events',
            'Internet of Things (IoT)',
            'Lifestyle & Hobby',
            'Maps & Navigation',
            'Medtech / Healthcare',
            'Social Networking',
            'Tools / Utilities',
            'Other'
        ]
    },
    {
        'What about design?': [
            'Basic',
            'Polished',
            'I already have'
        ]
    },
    {
        'Will your project have any list of items or goods?': [
            'Yes - simple',
            'Yes - advanced (with categories & filters, etc)',
            'None'
        ]
    },
    {
        'Would you need data security features?': [
            'Standard',
            'Advanced',
            'None'
        ]
    },
    {
        'Do you need geolocation feature?': [
            'Simple',
            'Advanced',
            'None'
        ]
    },
    {
        'Do you need payment systems integration?': [
            'Simple (Payments to the platform) ',
            'Advanced (Complex transactions with fees, taxes, shipping, etc.) ',
            'None'
        ]
    },
    {
        'Do you need users to have their own account?': [
            'Simple (Login, Registration & profile)',
            'Advanced (A lot of personal preferences, and synchronization with social media)',
            'None'
        ]
    },
    {
        'Will you need to set permissions?': [
            'Simple',
            'Advanced',
            'Default (one admin for backend and simple users for frontend)'
        ]
    },
    {
        'Do you need a communications feature? (Built-in messaging platform)': [
            'Simple User-to-user',
            'Advanced (Group Chat, Postponed Delivery, etc.)',
            'None'
        ]
    },
    {
        'Will you need integration with logistics systems? (For delivery, etc.)': [
            'Yes',
            'No'
        ]
    },
    {
        'Do you need notifications?': [
            'Email',
            'Email + push',
            'None'
        ]
    },
    {
        'Do you need multilingual support?': [
            'Yes',
            'No'
        ]
    },
    {
        'Do you need content (articles, media) creation tool within the system?': [
            'Simple',
            'Advanced',
            'None'
        ]
    },
    {
        'Do you need analytics for your project?': [
            'Basic',
            'Advanced',
            'None'
        ]
    },
    {
        'Will you need matching logic? (For example, people-to-people or deliveries)': [
            'Simple',
            'Advanced',
            'None'
        ]
    },
    {
        'Will you need drop shipping platform feature?': [
            'Yes',
            'No'
        ]
    },
    {
        'Do you need loyalty program feature?': [
            'Yes',
            'No'
        ]
    },
    {
        'Do you need a data parcing service?': [
            'Basic',
            'Advanced',
            'None'
        ]
    },
    {
        'Do you need mobile-ready design & layouts?': [
            'Yes',
            'No'
        ]
    },
    {
        'Will you need to integrate your project with a mobile app in future?': [
            'Yes - I have an app ',
            'Yes - I plan to develop an app',
            'No'
        ]
    },
    {
        'Do you plan to integrate your project with IoT systems?': [
            'Basic',
            'Advanced',
            'None'
        ]
    },
    {
        'Do you plan to integrate your project with a CRM?': [
            'Basic',
            'Advanced',
            'None'
        ]
    }
]

var shotHand1 = {
    'project about': [],
    'about Design': '',
    'items or goods': '',
    'data security': '',
    'geolocation feature': '',
    'payment systems': '',
    'users own account': '',
    'permissions': '',
    'communications feature': '',
    'logistics systems': '',
    'notifications': '',
    'multilingual support': '',
    'content': '',
    'analytics': '',
    'matching logic': '',
    'drop shipping platform': '',
    'loyalty': '',
    'data parcing': '',
    'mobile-ready': '',
    'integrate': '',
    'IoT systems': '',
    'CRM': '',
    'first name': '',
    'last name': '',
    'company': '',
    'job title': '',
    'email': '',
    'phone': '',
    'text': '',
    'start': ''
}

const bigForm1 = [
    'What is your project about?',
    'What about design?',
    'Will your project have any list of items or goods?',
    'Would you need data security features?',
    'Do you need geolocation feature?',
    'Do you need payment systems integration?',
    'Do you need users to have their own account?',
    'Will you need to set permissions?',
    'Do you need a communications feature? (Built-in messaging platform)',
    'Will you need integration with logistics systems? (For delivery, etc.)',
    'Do you need notifications?',
    'Do you need multilingual support?',
    'Do you need content (articles, media) creation tool within the system?',
    'Do you need analytics for your project?',
    'Will you need matching logic? (For example, people-to-people or deliveries)',
    'Will you need drop shipping platform feature?',
    'Do you need loyalty program feature?',
    'Do you need a data parcing service?',
    'Do you need mobile-ready design & layouts?',
    'Will you need to integrate your project with a mobile app in future?',
    'Do you plan to integrate your project with IoT systems?',
    'Do you plan to integrate your project with a CRM?'
]

const privacy = {
    'Welcome to INDIAN CUSTOMER WEB SERVICES': [
        'These terms and conditions outline the rules and regulations for the use of INDIAN CUSTOMER WEB SERVICES\'s Website.',
        {
            'INDIAN CUSTOMER WEB SERVICES is located at:': [
                'Cu-tbi, block 3A, CHANDIGARH UNIVERSITY,NH-95, Ludhiana - Chandigarh State Hwy Mohali 140413 - Punjab , India',
                'Chitora Road Near Morar Cantonment, Gram, Ratwai, Madhya Pradesh, India'
            ]
        },
        'By accessing this website we assume you accept these terms and conditions in full. Do not continue to use INDIAN CUSTOMER WEB SERVICES\'s website if you do not accept all of the terms and conditions stated on this page.',
        'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company\'s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client\'s needs in respect of provision of the Company\'s stated services/products, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.'
    ],
    'Cookies': [
        'We employ the use of cookies. By using INDIAN CUSTOMER WEB SERVICES\'s website you consent to the use of cookies in accordance with INDIAN CUSTOMER WEB SERVICES\'s privacy policy.',
        'Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.'
    ],
    'License': [
        'Unless otherwise stated, INDIAN CUSTOMER WEB SERVICES and/or it\'s licensors own the intellectual property rights for all material on INDIAN CUSTOMER WEB SERVICES. All intellectual property rights are reserved. You may view and/or print pages from https://icws.in for your own personal use subject to restrictions set in these terms and conditions.',
        {
            'You must not:': [
                'Republish material from https://icws.in',
                'Sell, rent or sub-license material from https://icws.in',
                'Reproduce, duplicate or copy material from https://icws.in'
            ]
        },
        'Redistribute content from INDIAN CUSTOMER WEB SERVICES (unless content is specifically made for redistribution).'
    ],
    'User Commments': [
        'This Agreement shall begin on the date hereof.',
        'Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data (\'Comments\') in areas of the website. INDIAN CUSTOMER WEB SERVICES does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions ofINDIAN CUSTOMER WEB SERVICES, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws INDIAN CUSTOMER WEB SERVICESshall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.',
        'INDIAN CUSTOMER WEB SERVICESreserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions.',
        {
            'You warrant and represent that:': [
                'You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;',
                'The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party;',
                'The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy',
                'The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.'
            ]
        },
        'You hereby grant to INDIAN CUSTOMER WEB SERVICES a non-exclusive royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.'
    ],
    'Hyperlinking to our Content': [
        {
            'The following organizations may link to our Web site without prior written approval:': [
                'Government agencies;',
                'Search engines;',
                'News organizations;',
                'Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and',
                'Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.'
            ]
        },
        'These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party\'s site.',
        {
            'We may consider and approve in our sole discretion other link requests from the following types of organizations:': [
                'commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;',
                'dot.com community sites;',
                'associations or other groups representing charities, including charity giving sites,',
                'online directory distributors;',
                'internet portals;',
                'accounting, law and consulting firms whose primary clients are businesses; and',
                'educational institutions and trade associations.'
            ]
        },
        'We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of INDIAN CUSTOMER WEB SERVICES; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.',
        'These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party\'s site.',
        'If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to icwebservice239@gmail.com. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.',
        {
            'Approved organizations may hyperlink to our Web site as follows:': [
                'By use of our corporate name; or',
                'By use of the uniform resource locator (Web address) being linked to; or',
                'By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party\'s site.'
            ]
        },
        'No use of INDIAN CUSTOMER WEB SERVICES\'s logo or other artwork will be allowed for linking absent a trademark license agreement.'
    ],
    'Iframes': ['Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site.'],
    'Reservation of Rights': ['We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.'],
    'Removal of links from our website': [
        'If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.',
        'Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.'
    ],
    'Content Liability': ['We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.'],
    'Disclaimer': [
        {
            'To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:': [
                'limit or exclude our or your liability for death or personal injury resulting from negligence;',
                'limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
                'limit any of our or your liabilities in any way that is not permitted under applicable law; or',
                'exclude any of our or your liabilities that may not be excluded under applicable law.'
            ]
        },
        'The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.',
        'To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.'
    ],
    'Personal Assistant': [
        {
            '': [
                'We are not liable if the assistant of the other company help you in any kind of development.',
                'We are only liable for our managment staff for such changes.',
                'If you want to change your personal assistant, you can directly report on support@icws.in',
                'Any complaint regarding personal assistant, can be directly report on support@icws.in',
                'If our personal assistant doesn\'t resport within 12 hours you can directly report on supoort@icws.in',
                'If any world cries or any disaster activities took place then personal assistant would not be active'
            ]
        }
    ],
    'Credit & Contact Information': [
        'This Terms and conditions page was created at termsandconditionstemplate.com generator. If you have any queries regarding any of our terms,'
    ]
}

export {data, formContent, bigForm, shotHand, data1, shotHand1, bigForm1, privacy};