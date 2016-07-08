# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
QUESTIONS = [
  'What is Alzheimer’s disease and how does it differ from dementia?',
  'What is clinical research?',
  'What is a clinical trial?',
  'Why participate in a clinical trial?',
  'What happens when a person signs up for a clinical trial?',
  'Who can participate in a clinical trial?',
  'What are some common inclusion criteria for clinical trials for Alzheimer’s disease?',
  'What are some common exclusion criteria for clinical trials for AD?',
  'What happens during a trial?',
  'What should people consider before participating in a clinical trial?',
  'What are other benefits and risks of participating in a clinical trial?',
  'Who pays for research?',
  'How is the safety of the participant protected?',
  'What should people ask before participating in a trial?',
  'Does a participant continue to work with a primary health care provider while in a trial?',
  'Can a participant leave a clinical trial after it has begun?',
  'Where do the ideas for trials come from?',
  'What is a placebo?',
  'What is a control or control group?',
  'What are the different types of clinical trials?',
  'What are the phases of clinical trials?',
  'Can diet affect neurodegenerative diseases?',
  'What is Frontotemporal Dementia?',
  'What are the types of FTD?'
]

DESCRIPTIONS = [
  nil,
  '<p>I am thinking about participating, but am not sure what to expext.</p>',
  '<p>Is it different from other typs of research?</p>',
  '<p>I would like to help the scientific community, but prefer to know how I would be helping</p>',
  nil,
  '<p>Can anyone do it?</p>',
  '<p>I know a few people who are interested in participating but unsure if they would be able to.</p>',
  '<img src="https://images.unsplash.com/photo-1464824316190-a93cf5ffb07d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=57bc8a041877774b1584f78e17d6886c" />',
  nil,
  nil,
  '<img src="https://images.unsplash.com/uploads/1413395496082cbc91228/43e39040?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7e14d1493ceb809262c121f4b25e11b0" />',
  nil,
  '<p>It seems expensive...</p>',
  '<img src="https://images.unsplash.com/photo-1462045504115-6c1d931f07d1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=248ca56b5c48870c49a4e5e27e22af03" />',
  nil,
  '<p>Or do they have to stick with the trial until it is over?</p>',
  '<p>How does it turn into a study?</p>',
  '<img src="http://media.salon.com/2010/09/forget_the_pink_pill_try_a_placebo.jpg" />',
  '<img src="https://images.unsplash.com/photo-1464898644169-85eb09c329aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=538c77ea3fda8fa3927c02fd9cf61a29" />',
  '<p>They can\'t all be the same, right?</p>',
  '<p>What happens in each one?</p>',
  '<img src="https://images.unsplash.com/photo-1417217601328-d3c66e6f1d48?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=6b6b0c2e56a3b04470f56bf738873e83" />',
  '<p>I have heard the term used a lot lately. In fact, I have even started seeing it in some of the common news routes. I feel as though it is a complicated differentiation from Alzheimer\'s disease. I would say that I have the following concerns: <ul><li>What does it mean?</li><li>How is it different from Alzheimer\'s Disease</li><li>Is it new or has it been around for a long time</li><li>Why am I just now hearing about this?</li></ul></p>',
  '<img src="https://images.unsplash.com/photo-1453847668862-487637052f8a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7e975fe2069f0d7d1e657b7a5efb718d" />'
]

ANSWERS = [
  ['<p>Dementia is the general term for a progressive brain disorder that seriously affects a person\’s ability to carry out daily activities, usually due to changes in memory, language, organization, navigation and/or behavior. Dementia can be caused by a number of different conditions. The most common form of dementia among older people is Alzheimer’s disease (AD), which initially involves the parts of the brain that control thought, memory and language.</p>'],
  ['<p>Clinical research is generally considered to be a health-related research study in human beings that follows a pre-defined plan. The UCSF Memory and Aging Center conducts both observational and interventional types of research.</p><ul><li>Observational studies are used to follow people who may already be receiving treatment for an illness while measuring their outcomes. These studies rely upon a more natural setting as participants select their treatment. This approach is often used when interventional studies would be unethical or impractical (such as in the case of a rare disease).</li><li>Interventional studies test promising treatments in a controlled environment. In these studies, the investigator assigns participants to particular treatment groups in order to measure and compare their outcomes at the end of the trial. These studies are also called "clinical trials" or "treatment trials." New treatments cannot be widely used until they have been shown to work safely in patients, and clinical trials are the standard used to judge these treatments safe and effective.</li></ul>'],
  ['<p>A clinical trial is generally considered to be a biomedical or health-related research study in human beings that follows a pre-defined protocol. The UCSF Memory and Aging Center conducts both interventional and observational types of studies.</p><ul><li><i>Interventional studies</i> are those in which the research subjects are assigned by the investigator to a treatment or other intervention, and their outcomes are measured. The information presented here will mainly pertain to interventional studies.</li><li><i>Observational studies</i> are those in which individuals are observed and their outcomes are measured by the investigators.</li></ul><p>Rapid advances in our knowledge about AD have led to the development of many new drugs and treatment strategies. However, before these new strategies can be adopted, they must be shown to work in patients. This means that clinical trials&mdash;studies in people to rigorously test how well a treatment works&mdash;have become an increasingly important part of AD research. Advances in treatment are only possible through the participation of patients and study partners (a patient’s spouse, family member, caregiver or friend) in clinical trials.</p><p>Clinical trials are the primary way that researchers find out if a promising treatment is safe and effective for patients. Clinical trials also tell researchers which treatments are more effective than others. Trials take place at private research facilities, teaching hospitals, specialized AD research centers, and doctors\' offices.</p><p>Participating in a clinical trial is a big step for people with AD and their caregivers. That\'s why physicians and clinical trials staff spend lots of time talking with participants about what it\'s like to be in a trial and the pros and cons of participating. Here are some things that potential participants might want to know about clinical trials.</p></p>'],
  ['<p>Participants in clinical trials can play a more active role in their own health care, gain access to new research treatments before they are widely available, and help others by contributing to medical research.</p>'],
  ['<p>Once someone has indicated (s)he is interested in participating in a clinical trial at the UCSF Memory and Aging Center, her/his name will be added to our list of interested potential participants. We make every effort to enroll all people who are interested in and qualify for a clinical trial in a timely fashion, however sometimes due to the timing of a study (often there is a very limited amount of time to enroll subjects), a cap on the number of people we can enroll, or other unforeseen circumstances, interested potential participants may have to wait until a spot opens up, or sometimes may not be able to participate at all. As soon as a potential participant indicates (s)he is interested in participating in a clinical trial, we will do our best to inform him/her about potential delays, limited enrollment or other time pressures that may affect participation.</p><p>It is important to learn about the study. Study staff explain the trial in detail to potential research participants and describe possible risks and benefits. Staff also talk about the participants\' rights as research volunteers, including their right to leave the study at any time. Participants and their study partners are entitled to have this information repeated and explained until they feel they understand the nature of the study and any potential risks.</p><p>Once all questions have been answered and if there is still interest in being a part of the study, a patient participant is asked to sign an informed consent form. Laws and regulations regarding informed consent differ across States and research institutions, but all are intended to ensure that patient participants are protected and well cared for.</p><p>In some cases, a patient participant may no longer be able to provide informed consent because of problems with memory and confusion. In such cases, it is sometimes possible for an authorized representative (usually a family member) to give permission for the patient to participate. For example, the patient participant may have previously included research participation as part of his or her durable power of attorney.</p><p>Next, patients go through a screening process (see inclusion/exclusion) to see if they qualify to participate in the study. If they qualify and can safely participate, they can proceed with the other parts of the study.</p>'],
  ['<p>All clinical trials have guidelines about who can participate. Using <i>inclusion and exclusion criteria</i> is an important principle of medical research that helps to produce reliable results. The factors that allow someone to participate in a clinical trial are called <i>inclusion criteria</i> and those that disallow someone from participating are called <i>exclusion criteria</i>. These criteria are based on such factors as age, gender, the type and stage of a disease, previous treatment history, and other medical conditions. Before joining a clinical trial, a participant must qualify for the study. Some research studies seek participants with illnesses or conditions to be studied in the clinical trial, while others need healthy participants. It is important to note that inclusion and exclusion criteria are not used to reject people personally. Instead, the criteria are used to identify appropriate participants and keep them safe. The criteria help ensure that researchers will be able to answer the questions they plan to study.</p>'],
  ['<p>Here we list some examples of common general criteria for many of the studies that are done for AD at UCSF. Each specific study will have its own set of criteria that may differ from those listed below.</p><ul><li><i>Age between in the range of 50 to 90 years old.</i> Age ranges can vary slightly from one study to another, but this is a common range.</li><li><i>A clinical diagnosis of Alzheimer’s disease.</i> This diagnosis is usually made by a neurologist, psychiatrist or geriatrician who has evaluated the patient prior to the study. The diagnosis must be verified by the study doctor, usually at the first visit.</li><li><i>Cognitive status.</i> Participants in clinical trials for AD must have clear evidence of memory or other similar impairments, but must not be too impaired to perform the tests involved in the study. One common rating scale that physicians use to measure cognitive status is called the Mini-Mental State Exam (MMSE) score. Typically, MMSE scores for AD clinical trials are in the range of 14&ndash;26 points out of a maximum of 30. The specific MMSE range often varies considerably from one study to another.</li><li><i>Having a study partner (spouse, friend, partner, etc.) who has frequent contact with the participant and who is willing to come to the study visits.</i> This criterion is part of most AD studies because some AD patients may need assistance to drive or travel to study visits, remember appointments or reliably take their study medication(s). In addition, a caregiver’s opinion about how a study participant is doing is an important component of most studies.</li></ul>'],
  ['<ul><li><i>Not <b>stable</b> on dose of FDA-approved Alzheimer’s medications.</i> Most current AD clinical trials allow subjects to continue to take medications such as donepezil (Aricept®), rivastigmine (Exelon®), galantamine (Razadyne®) and memantine (Namenda®). However, subjects usually must be on stable doses of these medications for between 60&ndash;120 days prior to beginning a study. A stable dose means that there have been no persistent alterations in the amount of drug taken during that time period. Missing a dose or two will not affect eligibility.</li><li><i>Presence of another condition that may impact the results of an AD clinical trial.</i> Common conditions that are considered exclusions for most clinical trials include: dementia other than AD, history of a large stroke, active cancer within 5 years, atrial fibrillation, heart failure, kidney failure, recent major surgery, severe psychiatric disease.</li><li><i>Medications that may impact the results of an AD clinical trial.</i> These often include blood thinners such as warfarin and medicines that have the potential to impair memory such as anti-epileptic drugs.</li><li><i>Not able to undergo an MRI scan.</i> Many AD trials use MRI scans to monitor for safety or effectiveness of a new drug. If you have a pacemaker or other metal in your body that would preclude an MRI scan this may limit your ability to participate in some studies.</li></ul>'],
  ['<p>If participants agree to join the study and the screening process shows they\'re a good match, they have a "baseline" visit with the study staff. This visit generally involves a full physical exam and extensive cognitive and physical tests. This gives the study team information against which to measure future mental and physical changes. Participants also receive the test drug or treatment. As the study progresses, participating patients and family members usually must follow strict medication or treatment instructions and keep detailed records of symptoms.</p><p>Every so often, participants visit the clinic or research center to have physical and cognitive exams, brain scans, give blood and urine samples, and talk with study staff. These visits allow the investigators to assess the effects of the test drug or treatment, see how the disease is progressing, and see how the participant and the caregiver are doing.</p><p>In most clinical trials, participants are randomly assigned to a study group. One group, the test group, receives the experimental drug. Other groups may receive a different drug or a placebo (an inactive substance that looks like the study drug). Having the different groups is important because only by comparing them can researchers be confident that changes in the test group are the result of the experimental treatment and not some other factor.</p><p>In many trials, no one&mdash;not even the study team&mdash;knows who is getting the experimental drug and who is getting the placebo or other drug. This is called "masking" meaning that the patient/family member and the staff are "blind" to the treatment being received.</p>'],
  ['<p><i>Expectations and motivations.</i> Clinical trials generally don\'t have miraculous results. The test drug or treatment may relieve a symptom, change a clinical measurement, or reduce the risk of death. With a complex disease like AD, it is unlikely that one drug will cure or prevent the disease. Some people choose not to participate or drop out of a study because this reality doesn\'t meet their expectations. Others participate because they realize that even if the benefit to them may be slight, they are making a valuable contribution to knowledge that will help future patients.</p><p><i>Uncertainty.</i> Some families have a hard time with the uncertainties of participation&mdash;not knowing whether the person is on the test drug or the placebo, not being able to choose which study group to be in, not knowing for a long time whether the study was successful or not. Ongoing and open communication with study staff can help to counter this frustration.</p><p><i>Finding the right clinical trial.</i> Some clinical trials want participants who are cognitively healthy or have only mild symptoms because they are testing a drug that might delay the decline in cognitive function. Other trials are interested in working with participants who have more advanced AD because they are testing a drug that might lessen behavioral symptoms, or they are testing new strategies to help caregivers. Even though a participant may not be eligible for one trial, another trial may be just right.</p><p><i>The biggest benefit of all.</i> Many families find that the biggest benefit of participating in a clinical trial is the regular contact with the study team. These visits provide an opportunity to get state-of-the-art AD care and also to talk on an ongoing basis with experts in AD who have lots of practical experience and a broad perspective on the disease. The study team understands and can provide advice on the emotional and physical aspects of the person with AD and the caregivers\' experience. They can suggest ways to cope with the present and give insights into what to expect in the future. They also can share information about support groups and other helpful resources.</p>'],
  ['<h3>Benefits</h3></p><p>Clinical trials that are well-designed and well-executed are the best approach for eligible participants to:</p><ul><li>Play an active role in their own health care.</li><li>Gain access to new research treatments before they are widely available.</li><li>Obtain expert medical care at leading health care facilities during the trial.</li><li>Help others by contributing to medical research.</li></ul><h3>Risks</h3><p>There are risks to clinical trials.</p><ul><li>There may be unpleasant, serious or even life-threatening side effects to experimental treatment.</li><li>The experimental treatment may not be effective for the participant.</li><li>The protocol may require more of their time and attention than would a non-protocol treatment, including trips to the study site, more treatments, hospital stays or complex dosage requirements.</li></ul>'],
  ['<p>A clinical research study is paid for by the organization that sponsors the research. If the research is sponsored by the government, it may be paid for through a grant awarded to the doctors and scientists who conduct the research.</p><p>Some research studies are sponsored and paid for by drug and medical device companies. Other studies are paid for by private foundations for specific diseases, by gifts to the University or scientist, or by the researcher’s department at the medical center.</p>'],
  ['<p>The ethical and legal codes that govern medical practice also apply to clinical trials. In addition, most clinical research is federally regulated with built in safeguards to protect the participants. The trial follows a carefully controlled protocol, a study plan which details what researchers will do in the study. As a clinical trial progresses, researchers may report the results of the trial at scientific meetings, to medical journals, and to various government agencies. Individual participants\' names will remain secret and will not be mentioned in these reports.</p><p>Before a clinical research study can begin, the research plan must be approved by an Institutional Review Board. An Institutional Review Board, also called an IRB, is a committee of doctors, scientists, and people from the community where the clinical research is taking place. An IRB reviews the clinical research plan to make sure people in the research study will be treated fairly and that any risks will be explained to them.</p>'],
  ['<p>People should know as much as possible about the clinical trial and feel comfortable asking the members of the health care team questions about it, the care expected while in a trial, and the cost of the trial. The following questions might be helpful for the participant to discuss with the health care team. Some of the answers to these questions are found in the informed consent document.</p><ul><li>Who will be in charge of my care? Will (s)he profit from my participation in the study?<br/><i>The UCSF Memory and Aging Center is a non-profit, NIH-designated Alzheimer’s Disease Research Center with personnel specially-trained in the diagnosis and care of AD. There are approximately twenty-five neurologists, psychiatrists, psychologists and nurses who care for patients, and all clinical trials are led by a board-certified neurologist with special training in dementia. Salaries are determined by the University of California and are thus publicly available. A portion of some of the clinicians’ salaries may be paid by clinical trial funds, however the investigators do not directly profit from your enrollment.</i></br/></li><li>What is the purpose of the study? </li><li>Who is going to be in the study? </li><li>Why do researchers believe the experimental treatment being tested may be effective? Has it been tested before? </li><li>What kinds of tests and experimental treatments are involved? </li><li>How do the possible risks, side effects, and benefits in the study compare with my current treatment? </li><li>How might this trial affect my daily life? </li><li>How long will the trial last? </li><li>Will hospitalization be required? </li><li>Who will pay for the experimental treatment? </li><li>Will I be reimbursed for other expenses? </li><li>What type of long-term follow up care is part of this study? </li><li>How will I know that the experimental treatment is working? Will results of the trials be provided to me?</li></ul>'],
  ['<p>Yes. Most clinical trials provide short-term treatments related to a designated illness or condition, but do not provide extended or complete primary health care. In addition, by having the health care provider work with the research team, the participant can ensure that other medications or treatments will not conflict with the protocol.</p>'],
  ['<p>Yes. A participant can leave a clinical trial, at any time. When withdrawing from the trial, the participant should let the research team know about it, and the reasons for leaving the study.</p>'],
  ['<p>Ideas for clinical trials usually come from researchers. After researchers test new therapies or procedures in the laboratory and in animal studies, the experimental treatments with the most promising laboratory results are moved into clinical trials in humans. During a trial, more and more information is gained about an experimental treatment, its risks and how well it may or may not work.</p>'],
  ['<p>A placebo is an inactive pill, liquid, or powder that has no treatment value. In clinical trials, experimental treatments are often compared with placebos to assess the experimental treatment\'s effectiveness. In some studies, the participants in the control group will receive a placebo instead of an active drug or experimental treatment.</p>'],
  ['<p>A control is the standard by which experimental observations are evaluated. In many clinical trials, one group of patients will be given an experimental drug or treatment, while the control group is given either a standard treatment for the illness or a placebo.</p>'],
  ['<ul><li><i>Treatment trials</i> test experimental treatments, new combinations of drugs, or new approaches to surgery or radiation therapy.</li><li><i>Prevention trials</i> look for better ways to prevent disease in people who have never had the disease or to prevent a disease from returning. These approaches may include medicines, vitamins, vaccines, minerals or lifestyle changes.</li><li><i>Diagnostic trials</i> are conducted to find better tests or procedures for diagnosing a particular disease or condition.</li></ul>'],
  ['<p>Clinical trials are conducted in phases. The trials at each phase have a different purpose and help scientists answer different questions:</p><ul><li>In <i>Phase I</i>  trials, researchers test an experimental drug or treatment in a small group of people (20&ndash;80) for the first time to evaluate its safety, determine a safe dosage range and identify side effects.</li><li>In <i>Phase II</i>  trials, the experimental study drug or treatment is given to a larger group of people (100&ndash;300) to see if it is effective and to further evaluate its safety.</li><li>In <i>Phase III</i>  trials, the experimental study drug or treatment is given to large groups of people (1000&ndash;3000) to confirm its effectiveness, monitor side effects, compare it to commonly used treatments and collect information that will allow the experimental drug or treatment to be used safely.</li><li>In <i>Phase IV</i> trials, post marketing studies delineate additional information including the drug\'s risks, benefits and optimal use.</li></ul>'],
  [nil],
  ['<p>Frontotemporal dementia (FTD) is a group of related conditions resulting from the progressive degeneration of the temporal and frontal lobes of the brain. These areas of the brain play a significant role in decision-making, behavioral control, emotion and language.</p>', '<h3>Before you worry that it’s FTD<h3><p>Your doctor’s first mission is to rule out other possible illnesses that may look like FTD, such as Alzheimer\'s disease, Parkinson\'s disease or psychiatric problems. In most cases, meeting with an FTD expert is the best way to determine a correct diagnosis.</p>'],
  ['<p>The term "frontotemporal dementia" (FTD) includes three different clinical subtypes: behavioral variant FTD (also historically called "frontal variant FTD" or "Pick\'s Disease"), semantic dementia and progressive non-fluent aphasia.</p><p>The specific areas of the brain affected by each subtype cause different symptoms for each type.</p>']
]

TOPICS = [
  'Science',  # 0
  'Research', # 1
  'Dementia', # 2
  'Alzheimer\'s Disease', # 3
  'Trials',   # 4
  'Advice',   # 5
  'Safety',   # 6
  'FTD'       # 7
]

TOPIC_TAGGINGS = [
  [3, 2, 0],
  [1, 0],
  [4, 1, 0],
  [4, 1, 5],
  [4, 1, 6],
  [4, 1],
  [4, 1, 0, 3],
  [4, 1, 0, 3],
  [4, 1, 6],
  [4, 1, 6, 5],
  [4, 1, 6, 5],
  [1],
  [6],
  [6, 4, 5],
  [4, 6],
  [4, 6],
  [4, 1, 0],
  [4, 1, 0],
  [1, 0],
  [4, 1, 0],
  [4, 1, 0],
  [2, 5],
  [7, 2],
  [7, 2]
]

COMMENTS = [
  'I never thought about that!',
  'Great thought',
  'Interesting, I wonder where it came from',
  'I have thought the same thing',
  'I have never tought about it that way',
  'Thanks! I haven\'t been able to find much about this online',
  'I bet a lot of people appreciate reading this',
  'I would have never even wondered about this'
]

User.create!(
  username: 'guest',
  password: 'password'
)

30.times do
  User.create!(
    username: Faker::Name.first_name,
    password: 'password'
  )
end

TOPICS.each do |topic|
  Topic.create!(name: topic)
end

QUESTIONS.each_with_index do |question, idx|
  q = Question.new(
    author_id: rand(2...31),
    title: question,
    # description: Faker::Lorem.paragraph(rand(2...100)),
    topic_ids: TOPIC_TAGGINGS[idx].map { |tag_id| tag_id + 1 }
  )

  if DESCRIPTIONS[idx]
    q.description = DESCRIPTIONS[idx]
  end

  q.save!

  ANSWERS[idx].each do |content|
    if content
      Answer.create!(
        author_id: rand(2...31),
        question_id: idx + 1,
        content: content
      )
    end
  end
end

# 100.times do
#   Answer.create!(
#     author_id: rand(2...31),
#     question_id: rand(1...21),
#     content: Faker::Lorem.paragraph(rand(2...100))
#   )
# end

50.times do
  Comment.create!(
    author_id: rand(2...31),
    commentable: Question.find(rand(1...21)),
    content: COMMENTS.sample
  )

  Comment.create!(
    author_id: rand(2...31),
    commentable: Answer.find(rand(1...23)),
    content: COMMENTS.sample
  )
end
