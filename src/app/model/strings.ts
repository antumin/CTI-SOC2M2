export const capabilities = [
    {
        name: 'Vulnerability Management',
        explanation: 'Existing vulnerabilities define threats to information systems and IT infrastructure. Vulnerability management is part of different maturity models, industry standards, and SOC research. However, as vulnerability management deals with an adequate handling of \emph{known} vulnerabilities, it is a SOC capability influenced by CTI \citep{chismon2015threat}. Therefore, maturity assessment must consider relevant CTI formats and sources such as exploit and vulnerability databases. Applicable CTI formats to vulnerability management cover both security enumerations and scoring systems. They provide a common understanding, reference, and assessment of vulnerability severity to guide decision-making. Additionally, vulnerabilities relate to IT assets.'
    },{
        name: 'Log and Event Management',
        explanation: 'Logs and events capture information about system processes and system states. As a consequence, log and event management is concerned with internal data required for security analysis. Being part of various industry standards, IT operations, and SIEM tools, this capability is essential for SOC. But, to conduct effective log and event management, external CTI can foster security assessment and alignment to security goals. It is thus necessary to consider data formats describing attacker behavior documented by logs and system events. These data formats go beyond the essential log formats such as Syslog, NCSA, EVTX, or Common Event Format (CEF) and describe threat detection patterns.',
    },{
        name: 'Security Monitoring, Analysis & Threat Detection',
        explanation: 'Security monitoring is a continuous approach to ensure an organization\'s security goals. At the center of a SOC, security monitoring copes with an aggregate view of IT assets and their security. In conjunction with security monitoring, security analysis and threat detection can yield additional insights into specific security aspects and identify threats. While it is possible to conduct security monitoring, analysis, and threat detection without threat intelligence, the general threat landscape can provide essential clues. Contrasted with CTI on current malware, command and control servers, and ongoing cyberattacks, variations witnessed in network traffic and system behavior allow organizations to initiate appropriate follow-up steps. CTI formats applicable for this SOC capability mainly include information on IoC. Exemplary for additional CTI, we also list the MITRE ATT\&CK framework and the comprehensive STIX format.',
    },{
        name: 'Threat Hunting, Penetration Testing & Digital Forensics',
        explanation: 'Threat hunting, penetration testing, and digital forensics are all concerned with detailed investigations. In-depth analyses aggregated in this SOC capability go one step further than security monitoring and aim to find evidence of ongoing attacks, malware, existing vulnerabilities, and procedural deficiencies. As it is common practice to conduct threat hunting, penetration testing, and digital forensics to test actively and identify incidents, these activities rely on information. While it is necessary to resort to internal information, this is often not sufficient. However, the use of external CTI can integrate typical attack patterns and other identifying elements. Therefore, CTI formats describing TTPs, software weaknesses, and IoCs are of relevance. Together with appropriate technology, comprehensive CTI formats such as MISP can further assist specific actions.',
    },{
        name: 'Security Incident Management & Incident Response',
        explanation: 'A security incident may have various causes potentially leading to harm for an organization. As a security incident is a type of event that violates security policies, it is essential to manage security incidents and respond with appropriate measures. One aspect of managing is incident triage leading to a prioritization of actions based, for example, on impact or available resources. The greater concept of security incident management and incident response is currently gaining momentum. A variety of dedicated \emph{Security Orchestration, Automation and Response (SOAR)} systems \citep{Gartner.SOAR2020} and the underlying incident response standardization aim to establish a more efficient approach. Besides, for incident response training, cyber ranges are discussed. Thus, combined with existing ticketing systems, it becomes necessary to consider CTI formats centering on CoAs to support these use cases.',
    },{
        name: 'Core Cyber Threat Intelligence',
        explanation: 'Cyber Threat Intelligence is not only part of other SOC capabilities but also a SOC capability of itself. Based on incident reporting and CTI sharing, the core Cyber Threat Intelligence capability copes with comprehensive threat reports. Ensuring adequate gathering of external information and internal dissemination is at the center of this SOC capability. Nevertheless, using CTI demands comprehensive and structured CTI formats which encapsulate relevant threat information. Therefore, threat report formats are included to build a knowledge base about cyberattacks, threats, and security incidents. The sharing aspect of CTI is also incorporated in threat report formats focusing on data transfer.'
    }
]

export const capabilityLevels = [
    {
        name: 'Undefined',
        explanation: '',
        color: '#eb4034'
    },{
        name: 'Source',
        explanation: 'Have you determined and assessed the source of CTI with the mentioned CTI format(s)?',
        color: '#eb4034'
    },{
        name: 'Quality',
        explanation: 'Have you applied appropriate measures to assess the quality of the CTI structured with the mentioned CTI format(s)?',
        color: '#eb8f34'
    },{
        name: 'Integration',
        explanation: 'Have you integrated the CTI and the mentioned CTI format(s) into your organizational processes and technology architecture?',
        color: '#dfeb34'
    },{
        name: 'Automation',
        explanation: 'Have you automated retrieval, use and dissemination of CTI based on the mentioned CTI format(s)?',
        color: '#b4eb34'
    },{
        name: 'Improvement',
        explanation: 'Have you set-up a continuous improvement mechanism to cope with new developments within CTI and new CTI format(s)?',
        color: '#3aeb34'
    },
]

export const maturityLevels = [
    {
        name: 'Initial',
        explanation: ''
    },{
        name: 'Core',
        explanation: ''
    },{
        name: 'Extended',
        explanation: ''
    },{
        name: 'Proficient',
        explanation: ''
    }
]