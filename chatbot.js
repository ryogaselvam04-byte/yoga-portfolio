/* JADE — ZCODERS assistant for Yogaselvam: text + voice, English / தமிழ் / हिन्दी / తెలుగు, with a "start a project" enquiry flow */
(function(){
const EMAIL='ryogaselvam04@gmail.com',GH='github.com/ryogaselvam04-byte',LI='linkedin.com/in/r-yogaselvam';
const LANGS={en:{n:'English',v:'en-IN'},ta:{n:'தமிழ்',v:'ta-IN'},hi:{n:'हिन्दी',v:'hi-IN'},te:{n:'తెలుగు',v:'te-IN'}};

/* ---------- interface strings ---------- */
const UI={
en:{ph:'Ask about ZCODERS or Yogaselvam…',sub:'ZCODERS · AI ASSISTANT',tip:'ASK JADE ↗',listen:'Listening…',
 hi:"Hi there, I'm Jade 🌸 the assistant of ZCODERS — the freelance company founded and owned by Yogaselvam. I'd love to help you! Ask me about our services, projects or skills, or tap START A PROJECT and tell me what you'd like to build 💫",
 fb:"Aww, I'm not sure about that one yet 🙈 But I can happily tell you about ZCODERS, its services, Yogaselvam's skills and projects, or take your project enquiry. Try one of the buttons below 💕",
 nomic:'Voice input is not supported in this browser. Please use Chrome or Edge.',
 q1:'Yay, exciting! 🌟 What would you like to build?',q2:"Lovely choice! May I know your name? 😊",q3:'Thank you so much! Tell me your idea in a line or two (features, deadline, anything helpful) ✨',
 done:'All set, dear ✅ Tap the button below — it opens an email to Yogaselvam with your details filled in. Just press send.',send:'SEND ENQUIRY ↗',cancel:'Enquiry cancelled. Ask me anything else!',
 types:['Website','Full-stack app','AI app','Backend / API']},
ta:{ph:'ZCODERS பற்றி கேளுங்கள்…',sub:'ZCODERS · AI உதவியாளர்',tip:'JADE-ஐ கேளுங்கள் ↗',listen:'கேட்கிறேன்…',
 hi:"வணக்கம்ங்க, நான் ஜேட் 🌸 யோகசெல்வம் தொடங்கி நடத்தும் ZCODERS நிறுவனத்தின் உதவியாளர். உங்களுக்கு உதவ ஆசையா இருக்கேன்! சேவைகள், திட்டங்கள், திறமைகள் பற்றி கேளுங்க, இல்லன்னா START A PROJECT அழுத்தி உங்க ஐடியாவைச் சொல்லுங்க 💫",
 fb:"அச்சச்சோ, இது எனக்கு இன்னும் தெரியலைங்க 🙈 ஆனா ZCODERS, சேவைகள், யோகசெல்வத்தின் திறமைகள், திட்டங்கள் பத்தி சந்தோஷமா சொல்வேன்; உங்க புராஜெக்ட் கோரிக்கையும் வாங்கிக்கிறேன். கீழே உள்ள பொத்தான்களை பாருங்க 💕",
 nomic:'இந்த பிரவுசரில் குரல் உள்ளீடு இல்லை. Chrome அல்லது Edge பயன்படுத்துங்கள்.',
 q1:'சூப்பர்! 🌟 என்ன உருவாக்க ஆசைப்படுறீங்க?',q2:'நல்ல தேர்வு! உங்க பேரு என்னங்க? 😊',q3:'ரொம்ப நன்றிங்க! உங்க ஐடியாவை ஒரு சில வரிகள்ல சொல்லுங்க (வசதிகள், காலக்கெடு போன்றவை) ✨',
 done:'தயார் ✅ கீழே உள்ள பொத்தானை அழுத்துங்கள் — உங்கள் விவரங்களுடன் யோகசெல்வத்துக்கான மின்னஞ்சல் திறக்கும். Send அழுத்தினால் போதும்.',send:'கோரிக்கை அனுப்பு ↗',cancel:'கோரிக்கை ரத்து செய்யப்பட்டது. வேறு ஏதாவது கேளுங்கள்!',
 types:['இணையதளம்','Full-stack செயலி','AI செயலி','Backend / API']},
hi:{ph:'ZCODERS या योगसेल्वम के बारे में पूछें…',sub:'ZCODERS · AI असिस्टेंट',tip:'JADE से पूछें ↗',listen:'सुन रही हूँ…',
 hi:"नमस्ते जी, मैं जेड 🌸 योगसेल्वम की फ्रीलांस कंपनी ZCODERS की असिस्टेंट हूँ। आपकी मदद करके मुझे बहुत खुशी होगी! सेवाओं, प्रोजेक्ट्स और स्किल्स के बारे में पूछिए, या START A PROJECT दबाकर अपना आइडिया बताइए 💫",
 fb:"अरे, इसके बारे में मुझे अभी पता नहीं है 🙈 पर ZCODERS, सेवाओं, योगसेल्वम की स्किल्स और प्रोजेक्ट्स के बारे में खुशी से बता सकती हूँ, और आपकी प्रोजेक्ट पूछताछ भी ले सकती हूँ। नीचे दिए बटन आज़माइए 💕",
 nomic:'इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है। कृपया Chrome या Edge इस्तेमाल करें।',
 q1:'वाह, बहुत बढ़िया! 🌟 आप क्या बनवाना चाहते हैं?',q2:'अच्छी पसंद! क्या मैं आपका नाम जान सकती हूँ? 😊',q3:'बहुत धन्यवाद! अपना आइडिया एक-दो लाइन में बताइए (फीचर्स, डेडलाइन आदि) ✨',
 done:'तैयार ✅ नीचे का बटन दबाइए — आपकी जानकारी के साथ योगसेल्वम को ईमेल खुल जाएगा। बस Send दबाइए।',send:'पूछताछ भेजें ↗',cancel:'पूछताछ रद्द की गई। कुछ और पूछें!',
 types:['वेबसाइट','Full-stack ऐप','AI ऐप','Backend / API']},
te:{ph:'ZCODERS గురించి అడగండి…',sub:'ZCODERS · AI అసిస్టెంట్',tip:'JADE ని అడగండి ↗',listen:'వింటున్నాను…',
 hi:"హలో అండి, నేను జేడ్ 🌸 యోగసెల్వం నడుపుతున్న ZCODERS కంపెనీ అసిస్టెంట్‌ని. మీకు సహాయం చేయడం నాకు చాలా సంతోషం! సేవలు, ప్రాజెక్ట్‌లు, స్కిల్స్ గురించి అడగండి, లేదా START A PROJECT నొక్కి మీ ఐడియా చెప్పండి 💫",
 fb:"అయ్యో, ఇది నాకు ఇంకా తెలియదండి 🙈 కానీ ZCODERS, సేవలు, యోగసెల్వం స్కిల్స్, ప్రాజెక్ట్‌ల గురించి సంతోషంగా చెప్తాను, మీ ప్రాజెక్ట్ ఎంక్వైరీ కూడా తీసుకుంటాను. కింద ఉన్న బటన్లను చూడండి 💕",
 nomic:'ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ లేదు. దయచేసి Chrome లేదా Edge వాడండి.',
 q1:'అబ్బా, చాలా బాగుంది! 🌟 మీరు ఏమి నిర్మించాలనుకుంటున్నారు?',q2:'మంచి ఎంపిక! మీ పేరు చెప్తారా? 😊',q3:'చాలా థాంక్స్ అండి! మీ ఐడియాను ఒకటి రెండు లైన్లలో చెప్పండి (ఫీచర్లు, డెడ్‌లైన్ వంటివి) ✨',
 done:'సిద్ధం ✅ కింద ఉన్న బటన్ నొక్కండి — మీ వివరాలతో యోగసెల్వంకు ఈమెయిల్ తెరుచుకుంటుంది. Send నొక్కితే చాలు.',send:'ఎంక్వైరీ పంపండి ↗',cancel:'ఎంక్వైరీ రద్దు చేయబడింది. ఇంకేమైనా అడగండి!',
 types:['వెబ్‌సైట్','Full-stack యాప్','AI యాప్','Backend / API']}
};

/* ---------- quick buttons ---------- */
const CH={
 start:{en:'⚡ Start a project',ta:'⚡ புராஜெக்ட் தொடங்கு',hi:'⚡ प्रोजेक्ट शुरू करें',te:'⚡ ప్రాజెక్ట్ ప్రారంభించు'},
 zcoders:{en:'About ZCODERS',ta:'ZCODERS பற்றி',hi:'ZCODERS के बारे में',te:'ZCODERS గురించి'},
 services:{en:'Services',ta:'சேவைகள்',hi:'सेवाएँ',te:'సేవలు'},
 projects:{en:'Projects',ta:'திட்டங்கள்',hi:'प्रोजेक्ट्स',te:'ప్రాజెక్ట్‌లు'},
 skills:{en:'Skills',ta:'திறமைகள்',hi:'स्किल्स',te:'స్కిల్స్'},
 contact:{en:'Contact',ta:'தொடர்புக்கு',hi:'संपर्क',te:'సంప్రదింపు'}
};

/* ---------- answers ---------- */
const A={
zcoders:{
en:"ZCODERS is a freelancing company — Freelance · Build · Grow — founded and owned by Yogaselvam. Every freelance project is planned, built and delivered under the ZCODERS name: websites, full-stack apps, AI-powered tools and backends.",
ta:"ZCODERS என்பது யோகசெல்வம் தொடங்கி நடத்தும் ஃப்ரீலான்ஸ் நிறுவனம் — Freelance · Build · Grow. இணையதளங்கள், full-stack செயலிகள், AI கருவிகள், backend எல்லாம் ZCODERS பெயரில் திட்டமிட்டு உருவாக்கி வழங்கப்படுகின்றன.",
hi:"ZCODERS एक फ्रीलांस कंपनी है — Freelance · Build · Grow — जिसे योगसेल्वम ने शुरू किया और वही चलाते हैं। वेबसाइट, फुल-स्टैक ऐप, AI टूल्स और बैकएंड — हर प्रोजेक्ट ZCODERS नाम से बनाकर दिया जाता है।",
te:"ZCODERS అనేది యోగసెల్వం స్థాపించి నడుపుతున్న ఫ్రీలాన్స్ కంపెనీ — Freelance · Build · Grow. వెబ్‌సైట్లు, ఫుల్-స్టాక్ యాప్‌లు, AI టూల్స్, బ్యాకెండ్ — అన్నీ ZCODERS పేరుతో నిర్మించి అందిస్తారు."},
owner:{
en:"Yogaselvam is the Founder & Owner of ZCODERS and works as its MEAN Stack Developer. He also studies B.Sc. Computer Science at the University of Madras (2024–2027) in Thiruvallur, Tamil Nadu. When you hire ZCODERS, you work directly with him.",
ta:"யோகசெல்வம் ZCODERS-இன் நிறுவனர் & உரிமையாளர்; MEAN Stack Developer ஆகவும் பணிபுரிகிறார். திருவள்ளூரில் சென்னை பல்கலைக்கழகத்தில் B.Sc. Computer Science (2024–2027) படிக்கிறார். ZCODERS-ஐ அணுகினால் அவருடன் நேரடியாகப் பணிபுரியலாம்.",
hi:"योगसेल्वम ZCODERS के संस्थापक और मालिक हैं और MEAN Stack Developer के रूप में काम करते हैं। वे तिरुवल्लूर, तमिलनाडु में मद्रास विश्वविद्यालय से B.Sc. Computer Science (2024–2027) कर रहे हैं। ZCODERS को हायर करने पर आप सीधे उनके साथ काम करते हैं।",
te:"యోగసెల్వం ZCODERS వ్యవస్థాపకుడు & యజమాని, MEAN Stack Developer గా కూడా పనిచేస్తారు. తిరువళ్లూర్, తమిళనాడులో మద్రాస్ యూనివర్సిటీలో B.Sc. Computer Science (2024–2027) చదువుతున్నారు. ZCODERS ను సంప్రదిస్తే ఆయనతో నేరుగా పని చేస్తారు."},
services:{
en:"ZCODERS offers:\n1) Full-stack web development — modern, responsive, scalable apps.\n2) Website design & development — portfolio, business and landing pages.\n3) AI-powered applications — apps integrated with AI APIs and automation.\n4) Database & backend development — secure APIs, authentication, data management.",
ta:"ZCODERS வழங்கும் சேவைகள்:\n1) Full-stack வலை மேம்பாடு — நவீன, responsive, scalable செயலிகள்.\n2) இணையதள வடிவமைப்பு & மேம்பாடு — portfolio, business, landing pages.\n3) AI செயலிகள் — AI API மற்றும் automation இணைப்பு.\n4) Database & backend — பாதுகாப்பான API, authentication, தரவு மேலாண்மை.",
hi:"ZCODERS की सेवाएँ:\n1) फुल-स्टैक वेब डेवलपमेंट — आधुनिक, रिस्पॉन्सिव और स्केलेबल ऐप।\n2) वेबसाइट डिज़ाइन व डेवलपमेंट — पोर्टफोलियो, बिज़नेस, लैंडिंग पेज।\n3) AI-पावर्ड ऐप्लिकेशन — AI API और ऑटोमेशन के साथ।\n4) डेटाबेस व बैकएंड — सुरक्षित API, ऑथेंटिकेशन, डेटा मैनेजमेंट।",
te:"ZCODERS అందించే సేవలు:\n1) ఫుల్-స్టాక్ వెబ్ డెవలప్‌మెంట్ — ఆధునిక, రెస్పాన్సివ్, స్కేలబుల్ యాప్‌లు.\n2) వెబ్‌సైట్ డిజైన్ & డెవలప్‌మెంట్ — పోర్ట్‌ఫోలియో, బిజినెస్, ల్యాండింగ్ పేజీలు.\n3) AI యాప్‌లు — AI API, ఆటోమేషన్ ఇంటిగ్రేషన్.\n4) డేటాబేస్ & బ్యాకెండ్ — సురక్షిత API, ఆథెంటికేషన్, డేటా నిర్వహణ."},
projects:{
en:"14 projects built so far. Featured: JARVIS AI Voice Assistant (Python), Project Infinity AI Hub, AI Skin & Body Care System, Disaster Impact Mapping System, Fake Review Detection App and AutoSphere (MEAN). More: BookHive, Online Gift Management, AI WeatherWise API, Digital Notice Board, FitTrack AI, Plant Care Assistant, Programming MCQ Practice System and IP Radar Tracker. See the Projects section above.",
ta:"இதுவரை 14 திட்டங்கள். முக்கியமானவை: JARVIS AI Voice Assistant (Python), Project Infinity AI Hub, AI Skin & Body Care, Disaster Impact Mapping, Fake Review Detection, AutoSphere (MEAN). மேலும்: BookHive, Online Gift Management, AI WeatherWise API, Digital Notice Board, FitTrack AI, Plant Care Assistant, Programming MCQ Practice, IP Radar Tracker. மேலே Projects பகுதியைப் பாருங்கள்.",
hi:"अब तक 14 प्रोजेक्ट बने हैं। मुख्य: JARVIS AI Voice Assistant (Python), Project Infinity AI Hub, AI Skin & Body Care, Disaster Impact Mapping, Fake Review Detection और AutoSphere (MEAN)। अन्य: BookHive, Online Gift Management, AI WeatherWise API, Digital Notice Board, FitTrack AI, Plant Care Assistant, Programming MCQ Practice, IP Radar Tracker। ऊपर Projects सेक्शन देखें।",
te:"ఇప్పటివరకు 14 ప్రాజెక్ట్‌లు. ముఖ్యమైనవి: JARVIS AI Voice Assistant (Python), Project Infinity AI Hub, AI Skin & Body Care, Disaster Impact Mapping, Fake Review Detection, AutoSphere (MEAN). ఇంకా: BookHive, Online Gift Management, AI WeatherWise API, Digital Notice Board, FitTrack AI, Plant Care Assistant, Programming MCQ Practice, IP Radar Tracker. పైన Projects విభాగం చూడండి."},
skills:{
en:"Languages: Python, Java, C, HTML, CSS, JavaScript.\nFull stack: Node.js, Express.js, MEAN Stack, REST APIs.\nDatabases: MongoDB, MySQL, Firebase, Supabase.\nTools: VS Code, Eclipse, Git, GitHub, GCP, Android Studio.\nClick any skill box above to see where each one was used.",
ta:"மொழிகள்: Python, Java, C, HTML, CSS, JavaScript.\nFull stack: Node.js, Express.js, MEAN Stack, REST APIs.\nDatabases: MongoDB, MySQL, Firebase, Supabase.\nTools: VS Code, Eclipse, Git, GitHub, GCP, Android Studio.\nமேலே உள்ள skill பெட்டிகளை அழுத்தினால் எங்கு பயன்படுத்தப்பட்டது எனத் தெரியும்.",
hi:"भाषाएँ: Python, Java, C, HTML, CSS, JavaScript.\nFull stack: Node.js, Express.js, MEAN Stack, REST APIs.\nडेटाबेस: MongoDB, MySQL, Firebase, Supabase.\nटूल्स: VS Code, Eclipse, Git, GitHub, GCP, Android Studio.\nऊपर किसी भी स्किल बॉक्स पर क्लिक करके देखें कि कहाँ इस्तेमाल हुआ।",
te:"భాషలు: Python, Java, C, HTML, CSS, JavaScript.\nFull stack: Node.js, Express.js, MEAN Stack, REST APIs.\nడేటాబేస్: MongoDB, MySQL, Firebase, Supabase.\nటూల్స్: VS Code, Eclipse, Git, GitHub, GCP, Android Studio.\nపైన ఉన్న స్కిల్ బాక్స్‌లను క్లిక్ చేస్తే ఎక్కడ వాడారో కనిపిస్తుంది."},
experience:{
en:"Yogaselvam founded and runs ZCODERS (freelance, 2026–present). He also did an Account Management internship at Sri Ram Roofing, Thiruvallur (Jun–Jul 2026): financial records, invoices, vouchers and office documentation — which sharpened his communication, teamwork and time management.",
ta:"யோகசெல்வம் ZCODERS-ஐ தொடங்கி நடத்துகிறார் (ஃப்ரீலான்ஸ், 2026 முதல்). மேலும் திருவள்ளூர் Sri Ram Roofing-ல் Account Management இன்டர்ன் (ஜூன்–ஜூலை 2026): நிதி ஆவணங்கள், இன்வாய்ஸ், வவுச்சர், அலுவலக ஆவணப்பணி.",
hi:"योगसेल्वम ने ZCODERS शुरू किया और चलाते हैं (फ्रीलांस, 2026 से)। उन्होंने तिरुवल्लूर में Sri Ram Roofing में Account Management इंटर्नशिप भी की (जून–जुलाई 2026): वित्तीय रिकॉर्ड, इनवॉइस, वाउचर और ऑफिस डॉक्यूमेंटेशन।",
te:"యోగసెల్వం ZCODERS ను స్థాపించి నడుపుతున్నారు (ఫ్రీలాన్స్, 2026 నుండి). తిరువళ్లూర్‌లోని Sri Ram Roofing లో Account Management ఇంటర్న్‌షిప్ (జూన్–జూలై 2026): ఆర్థిక రికార్డులు, ఇన్వాయిస్‌లు, వౌచర్లు, ఆఫీస్ డాక్యుమెంటేషన్."},
education:{
en:"B.Sc. Computer Science (2024–2027), University of Madras, Tamil Nadu. Coursework: web development, artificial intelligence, systems programming, software methodology, UI/UX design, database management, internet technology and computer architecture.",
ta:"B.Sc. Computer Science (2024–2027), சென்னை பல்கலைக்கழகம், தமிழ்நாடு. பாடங்கள்: web development, artificial intelligence, systems programming, software methodology, UI/UX design, database management, internet technology, computer architecture.",
hi:"B.Sc. Computer Science (2024–2027), मद्रास विश्वविद्यालय, तमिलनाडु। कोर्सवर्क: वेब डेवलपमेंट, आर्टिफिशियल इंटेलिजेंस, सिस्टम्स प्रोग्रामिंग, सॉफ्टवेयर मेथडोलॉजी, UI/UX डिज़ाइन, डेटाबेस मैनेजमेंट, इंटरनेट टेक्नोलॉजी, कंप्यूटर आर्किटेक्चर।",
te:"B.Sc. Computer Science (2024–2027), మద్రాస్ విశ్వవిద్యాలయం, తమిళనాడు. కోర్సులు: web development, artificial intelligence, systems programming, software methodology, UI/UX design, database management, internet technology, computer architecture."},
why:{
en:"Why ZCODERS? Modern, responsive designs · clean, organised code · user-friendly experiences · dedicated project development · focus on quality and timely delivery — and you deal directly with the owner, Yogaselvam.",
ta:"ஏன் ZCODERS? நவீன responsive வடிவமைப்பு · சுத்தமான code · பயனர் நட்பு அனுபவம் · முழு கவனத்துடன் திட்ட மேம்பாடு · தரம் மற்றும் சரியான நேர டெலிவரி — உரிமையாளர் யோகசெல்வத்துடன் நேரடித் தொடர்பு.",
hi:"ZCODERS क्यों? आधुनिक, रिस्पॉन्सिव डिज़ाइन · साफ़-सुथरा कोड · यूज़र-फ्रेंडली अनुभव · समर्पित प्रोजेक्ट डेवलपमेंट · क्वालिटी और समय पर डिलीवरी — और आप सीधे मालिक योगसेल्वम से बात करते हैं।",
te:"ZCODERS ఎందుకు? ఆధునిక రెస్పాన్సివ్ డిజైన్లు · శుభ్రమైన కోడ్ · యూజర్-ఫ్రెండ్లీ అనుభవం · అంకితభావంతో ప్రాజెక్ట్ డెవలప్‌మెంట్ · నాణ్యత, సమయానికి డెలివరీ — యజమాని యోగసెల్వంతో నేరుగా మాట్లాడవచ్చు."},
contact:{
en:`Reach Yogaselvam (owner, ZCODERS):\nEmail: ${EMAIL}\nGitHub: ${GH}\nLinkedIn: ${LI}\nOr tap START A PROJECT and I'll prepare the email for you.`,
ta:`யோகசெல்வத்தை (உரிமையாளர், ZCODERS) தொடர்பு கொள்ள:\nEmail: ${EMAIL}\nGitHub: ${GH}\nLinkedIn: ${LI}\nஅல்லது START A PROJECT அழுத்துங்கள், நான் மின்னஞ்சலை தயார் செய்வேன்.`,
hi:`योगसेल्वम (मालिक, ZCODERS) से संपर्क:\nEmail: ${EMAIL}\nGitHub: ${GH}\nLinkedIn: ${LI}\nया START A PROJECT दबाएँ, मैं ईमेल तैयार कर दूँगी।`,
te:`యోగసెల్వం (యజమాని, ZCODERS) ను సంప్రదించండి:\nEmail: ${EMAIL}\nGitHub: ${GH}\nLinkedIn: ${LI}\nలేదా START A PROJECT నొక్కండి, నేను ఈమెయిల్ సిద్ధం చేస్తాను.`},
resume:{
en:"Use the DOWNLOAD RESUME button at the top of this page or in the contact section.",
ta:"இந்தப் பக்கத்தின் மேலே அல்லது contact பகுதியில் உள்ள DOWNLOAD RESUME பொத்தானைப் பயன்படுத்துங்கள்.",
hi:"पेज के ऊपर या कॉन्टैक्ट सेक्शन में DOWNLOAD RESUME बटन का उपयोग करें।",
te:"ఈ పేజీ పైన లేదా కాంటాక్ట్ విభాగంలో ఉన్న DOWNLOAD RESUME బటన్ వాడండి."},
loc:{
en:"Yogaselvam is based in Thiruvallur, Tamil Nadu, India. ZCODERS works with clients remotely.",
ta:"யோகசெல்வம் இந்தியாவின் தமிழ்நாடு, திருவள்ளூரில் இருக்கிறார். ZCODERS வாடிக்கையாளர்களுடன் தொலைவிலிருந்து பணிபுரிகிறது.",
hi:"योगसेल्वम तिरुवल्लूर, तमिलनाडु, भारत में रहते हैं। ZCODERS क्लाइंट्स के साथ रिमोटली काम करता है।",
te:"యోగసెల్వం భారతదేశంలో తమిళనాడులోని తిరువళ్లూర్‌లో ఉంటారు. ZCODERS క్లయింట్లతో రిమోట్‌గా పని చేస్తుంది."},
hello:{
en:"Hello, lovely! 🌸 Ask me about ZCODERS, its services, Yogaselvam's projects and skills — or start a project enquiry.",
ta:"வணக்கம்! 👋 ZCODERS, சேவைகள், யோகசெல்வத்தின் திட்டங்கள், திறமைகள் பற்றி கேளுங்கள் — அல்லது புராஜெக்ட் கோரிக்கை தொடங்குங்கள்.",
hi:"नमस्ते! 👋 ZCODERS, सेवाओं, योगसेल्वम के प्रोजेक्ट्स और स्किल्स के बारे में पूछें — या प्रोजेक्ट पूछताछ शुरू करें।",
te:"హలో! 👋 ZCODERS, సేవలు, యోగసెల్వం ప్రాజెక్ట్‌లు, స్కిల్స్ గురించి అడగండి — లేదా ప్రాజెక్ట్ ఎంక్వైరీ ప్రారంభించండి."},
thanks:{
en:"You're so welcome! 😊 Anytime. Would you like to start a project with ZCODERS? 💫",
ta:"ரொம்ப சந்தோஷம்ங்க! 😊 ZCODERS-உடன் புராஜெக்ட் தொடங்க விரும்புறீங்களா? 💫",
hi:"आपका बहुत स्वागत है! 😊 क्या आप ZCODERS के साथ प्रोजेक्ट शुरू करना चाहेंगे? 💫",
te:"చాలా సంతోషం అండి! 😊 ZCODERS తో ప్రాజెక్ట్ ప్రారంభించాలనుకుంటున్నారా? 💫"}
};

/* ---------- keyword patterns: English, Tanglish, Tamil, Hindi, Telugu ---------- */
const K={
hello:/\b(hi|hello|hey|vanakkam|namaste|good (morning|evening))\b|வணக்கம்|நமஸ்தே|नमस्ते|हेलो|హలో|నమస్తే/,
thanks:/thank|nandri|நன்றி|धन्यवाद|शुक्रिया|ధన్యవాదాలు/,
start:/\b(start|begin|hire|enquir\w*|inquir\w*|quote|quotation|order|need (a|an)|build (me|a|an)|my project|work with)\b|புராஜெக்ட் தொடங்கு|வேலை கொடு|प्रोजेक्ट शुरू|हायर|ప్రాజెక్ట్ ప్రారంభ|హైర్/,
owner:/\b(owner|founder|ceo|boss|who (owns|runs|started|founded)|yoga|yogaselvam|yogaselvam|yoga selvam|about (him|you))\b|உரிமையாளர்|நிறுவனர்|யோக|मालिक|संस्थापक|योग|యజమాని|వ్యవస్థాపక|యోగ/,
zcoders:/\b(zcoders?|company|freelanc\w*|agency|firm|team)\b|நிறுவனம்|ஃப்ரீலான்ஸ்|कंपनी|फ्रीलांस|కంపెనీ|ఫ్రీలాన్స్/,
services:/\b(services?|offer|offering|provide|do you do|what can you|pricing|price|cost|charge|rates?)\b|சேவை|விலை|सेवा|कीमत|सर्विस|సేవ|ధర/,
projects:/\b(projects?|built|made|portfolio|jarvis|infinity|autosphere|bookhive|weatherwise|samples?|work done)\b|திட்ட|புராஜெக்ட்|प्रोजेक्ट|ప్రాజెక్ట్/,
skills:/\b(skills?|tech\w*|stack|mean|mern|python|java|node\w*|mongo\w*|react|angular|tools?|languages?|know)\b|திறமை|தொழில்நுட்ப|स्किल|कौशल|टेक|స్కిల్|నైపుణ్య/,
experience:/\b(experience|intern\w*|sri ram|roofing|worked|work history)\b|அனுபவ|இன்டர்ன்|अनुभव|इंटर्न|అనుభవ|ఇంటర్న్/,
education:/\b(education|college|degree|study|studying|university|madras|bsc|b\.sc|qualification|padipu)\b|கல்வி|படிப்பு|பல்கலை|शिक्षा|पढ़ाई|विश्वविद्यालय|విద్య|చదువు/,
contact:/\b(contact|email|e-mail|mail|reach|github|linkedin|connect|talk)\b|தொடர்பு|மின்னஞ்சல்|संपर्क|ईमेल|సంప్రదింపు|ఈమెయిల్/,
resume:/\b(resume|cv|download)\b|ரெஸ்யூம்|பதிவிறக்க|रिज्यूमे|डाउनलोड|రెజ్యూమ్|డౌన్‌లోడ్/,
loc:/\b(where|location|live|city|place|ooru|based)\b|எங்கே|இடம்|ஊர்|कहाँ|स्थान|शहर|ఎక్కడ|ప్రదేశం/,
why:/\b(why|best|strength|better|special|trust|reliable|quality)\b|ஏன்|சிறப்பு|क्यों|खासियत|ఎందుకు|ప్రత్యేక/
};
const ORDER=['start','why','resume','contact','experience','education','projects','skills','services','owner','zcoders','loc','thanks','hello'];
function detect(t){let best=null,bs=0;ORDER.forEach(k=>{const m=t.match(new RegExp(K[k].source,'giu'));const s=m?m.length:0;if(s>bs){bs=s;best=k}});return best}
function scriptLang(t){if(/[\u0B80-\u0BFF]/.test(t))return'ta';if(/[\u0900-\u097F]/.test(t))return'hi';if(/[\u0C00-\u0C7F]/.test(t))return'te';return null}

/* ---------- state + DOM ---------- */
let lang=localStorage.getItem('jade_lang')||'en',speakOn=true,rec=null,listening=false,flow=null;
const $=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const GEM='<svg class="zb-gem" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M9 7 H21 L27 14 L16 28 L5 14 Z" fill="#29c6ff" fill-opacity=".16" stroke="#40ccff" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 14 H27" stroke="#40ccff" stroke-width="1.2"/><path d="M9 7 L12.5 14 L16 7 L19.5 14 L21 7" stroke="#6ad7ff" stroke-width="1.1" stroke-linejoin="round"/><path d="M12.5 14 L16 28 L19.5 14" stroke="#6ad7ff" stroke-width="1.1" stroke-linejoin="round"/><path d="M16 7 L12.5 14 L16 28 Z" fill="#29c6ff" fill-opacity=".28"/><path class="spark" d="M26 1.5 L27 4.5 L30 5.5 L27 6.5 L26 9.5 L25 6.5 L22 5.5 L25 4.5 Z" fill="#d0f2ff"/></svg>';
const fab=$('button','zb-fab',GEM+'<i></i>');fab.setAttribute('aria-label','Chat with Jade');
const tip=$('div','zb-tip','');
const panel=$('div','zb-panel');
panel.innerHTML=`<div class="zb-head"><div class="zb-av">${GEM}</div><div class="zb-title"><b>JADE<em>.</em></b><small id="zbSub"></small></div><div class="zb-tools"><select id="zbLang" aria-label="Language"></select><button id="zbSpk" title="Voice replies on/off" aria-label="Toggle voice replies">🔊</button><button id="zbX" aria-label="Close">✕</button></div></div><div class="zb-msgs" id="zbMsgs"></div><div class="zb-chips" id="zbChips"></div><form class="zb-form" id="zbForm"><button type="button" class="zb-mic" id="zbMic" aria-label="Speak">🎤</button><input id="zbIn" autocomplete="off"><button type="submit" class="zb-send" aria-label="Send">↗</button></form>`;
document.body.append(fab,tip,panel);
const msgs=panel.querySelector('#zbMsgs'),inp=panel.querySelector('#zbIn'),sel=panel.querySelector('#zbLang'),chips=panel.querySelector('#zbChips'),spk=panel.querySelector('#zbSpk'),mic=panel.querySelector('#zbMic');
Object.entries(LANGS).forEach(([k,v])=>sel.add(new Option(v.n,k)));

function paintChips(){chips.innerHTML='';
 if(flow&&flow.step===1){UI[lang].types.forEach((t,i)=>{const b=$('button','',t);b.type='button';b.onclick=()=>flowAnswer(t);chips.append(b)});const c=$('button','zb-cancel','✕');c.type='button';c.onclick=cancelFlow;chips.append(c);return}
 if(flow){const c=$('button','zb-cancel','✕');c.type='button';c.onclick=cancelFlow;chips.append(c);return}
 Object.keys(CH).forEach(k=>{const b=$('button',k==='start'?'zb-hot':'',CH[k][lang]);b.type='button';b.onclick=()=>{if(k==='start')beginFlow();else ask(CH[k][lang],k)};chips.append(b)})}
function applyLang(){sel.value=lang;inp.placeholder=UI[lang].ph;panel.querySelector('#zbSub').textContent=UI[lang].sub;tip.textContent=UI[lang].tip;localStorage.setItem('jade_lang',lang);paintChips()}

/* ---------- voice (soft female voice) ---------- */
let voices=[];function loadV(){voices=speechSynthesis.getVoices()}
if('speechSynthesis' in window){loadV();speechSynthesis.onvoiceschanged=loadV}
const FEM=/female|woman|zira|hazel|susan|samantha|victoria|karen|moira|tessa|fiona|veena|heera|aria|jenny|michelle|sonia|swara|neerja|kalpana|pallavi|shruti|lekha|priya|sangeeta|raveena|google (uk english female|us english|\u0939\u093f\u0928\u094d\u0926\u0940|\u0ba4\u0bae\u0bbf\u0bb4\u0bcd)/i,MAL=/\bmale\b|david|mark|george|ravi|hemant|valluvar|mohan|daniel|alex|fred|guy|ryan|james|rishi|prabhat|thomas|oliver|christopher|eric|brian|liam/i;
function pickFemale(l){const L=l.toLowerCase(),base=L.split('-')[0];const same=voices.filter(x=>x.lang.replace('_','-').toLowerCase()===L),pool=same.length?same:voices.filter(x=>x.lang.toLowerCase().startsWith(base));return pool.find(x=>FEM.test(x.name)&&!MAL.test(x.name))||pool.find(x=>!MAL.test(x.name))||pool[0]}
function say(text){if(!speakOn||!('speechSynthesis' in window))return;speechSynthesis.cancel();const clean=text.replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/gu,'').replace(/\n+/g,'. ').replace(/https?:\/\/\S+/g,'').replace(/[↗⚡✅]/g,'');const u=new SpeechSynthesisUtterance(clean);u.lang=LANGS[lang].v;const v=pickFemale(u.lang);if(v)u.voice=v;const fem=v&&FEM.test(v.name)&&!MAL.test(v.name);u.rate=.88;u.pitch=fem?1.15:1.4;u.volume=.95;speechSynthesis.speak(u)}

/* ---------- messaging ---------- */
function add(text,who){const m=$('div','zb-m '+who);m.textContent=text;msgs.append(m);msgs.scrollTop=msgs.scrollHeight;return m}
function botSay(text,after){const t=$('div','zb-m bot typing','<i></i><i></i><i></i>');msgs.append(t);msgs.scrollTop=msgs.scrollHeight;setTimeout(()=>{t.remove();add(text,'bot');say(text);if(after)after()},420)}
const SW={en:['Sure, happy to help! 😊','Of course, dear! 🌸','Great question! ✨','Aww, sure! 💕'],ta:['சரிங்க, சந்தோஷமா சொல்றேன்! 😊','கண்டிப்பா! 🌸','நல்ல கேள்விங்க! ✨','சரிங்க! 💕'],hi:['जी बिल्कुल, खुशी से बताती हूँ! 😊','ज़रूर! 🌸','बहुत अच्छा सवाल! ✨','जी, ज़रूर! 💕'],te:['తప్పకుండా అండి, సంతోషంగా చెప్తాను! 😊','తప్పకుండా! 🌸','మంచి ప్రశ్న! ✨','సరేనండి! 💕']};
function reply(key){const sw=SW[lang][Math.floor(Math.random()*4)];botSay(A[key]?sw+'\n'+A[key][lang]:UI[lang].fb,()=>{if(key==='services'||key==='zcoders'||key==='owner'||key==='why')offerStart()})}
function offerStart(){const b=$('button','zb-inline',CH.start[lang]);b.type='button';b.onclick=()=>{b.remove();beginFlow()};msgs.append(b);msgs.scrollTop=msgs.scrollHeight}

/* ---------- project enquiry flow ---------- */
function beginFlow(){flow={step:1,type:'',name:'',idea:''};paintChips();botSay(UI[lang].q1)}
function flowAnswer(text){
 if(flow.step===1){flow.type=text;flow.step=2;add(text,'user');paintChips();botSay(UI[lang].q2)}
 else if(flow.step===2){flow.name=text;flow.step=3;add(text,'user');botSay(UI[lang].q3)}
 else if(flow.step===3){flow.idea=text;add(text,'user');finishFlow()}}
function finishFlow(){const f=flow;flow=null;paintChips();
 const subject=encodeURIComponent('ZCODERS - '+f.type+' project enquiry from '+f.name);
 const body=encodeURIComponent('Hi Yogaselvam,\n\nI would like to start a project with ZCODERS.\n\nName: '+f.name+'\nProject type: '+f.type+'\nIdea: '+f.idea+'\n\nPlease get back to me.\n');
 botSay(UI[lang].done,()=>{const a=$('a','zb-inline zb-cta',UI[lang].send);a.href='mailto:'+EMAIL+'?subject='+subject+'&body='+body;msgs.append(a);msgs.scrollTop=msgs.scrollHeight})}
function cancelFlow(){flow=null;paintChips();botSay(UI[lang].cancel)}

function ask(text,key){text=(text||'').trim();if(!text)return;
 const sl=scriptLang(text);if(sl&&sl!==lang){lang=sl;applyLang()}
 if(flow&&!key){flowAnswer(text);return}
 if(flow&&key){flow=null;paintChips()}
 add(text,'user');
 const k=key||detect(text.toLowerCase());
 if(k==='start'){beginFlow();return}
 reply(k)}

sel.onchange=()=>{lang=sel.value;applyLang();if('speechSynthesis' in window)speechSynthesis.cancel();const g=UI[lang].hi;add(g,'bot');say(g)};
spk.onclick=()=>{speakOn=!speakOn;spk.classList.toggle('off',!speakOn);if(!speakOn&&'speechSynthesis' in window)speechSynthesis.cancel()};
panel.querySelector('#zbForm').onsubmit=e=>{e.preventDefault();const v=inp.value;inp.value='';ask(v)};
panel.querySelector('#zbX').onclick=()=>{panel.classList.remove('open');if('speechSynthesis' in window)speechSynthesis.cancel()};
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
mic.onclick=()=>{if(!SR){add(UI[lang].nomic,'bot');return}if(listening){rec.stop();return}if('speechSynthesis' in window)speechSynthesis.cancel();rec=new SR();rec.lang=LANGS[lang].v;rec.interimResults=false;rec.onstart=()=>{listening=true;mic.classList.add('rec');inp.placeholder=UI[lang].listen};rec.onend=()=>{listening=false;mic.classList.remove('rec');inp.placeholder=UI[lang].ph};rec.onresult=e=>ask(e.results[0][0].transcript);rec.onerror=()=>{};rec.start()};
let greeted=false;
fab.onclick=()=>{tip.remove();panel.classList.toggle('open');if(panel.classList.contains('open')){if(!greeted){greeted=true;const g=UI[lang].hi;add(g,'bot');say(g)}setTimeout(()=>inp.focus(),250)}else if('speechSynthesis' in window)speechSynthesis.cancel()};
setTimeout(()=>{if(tip.isConnected)tip.classList.add('show')},2500);
applyLang();
})();
