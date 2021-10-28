# CTI-SOC2M2
CTI-SOC2M2 is a maturity model that aims at assessing the maturity of SOCs based on the use of CTI. The maturity model is based on the assumption that employees within an organization record the capability level for each SOC service. In this scenario, selfassessment is best supported with a suitable tool. Essentially, the tool provides two functions. 
On the one hand, it can be used to record capability levels. On the other hand, it will calculate and display the overall SOC maturity.

### Architecture 
The following figure depicts the structure of the CTI-SOC2M2 self-assesment tool. A demo version of the implementation can be acessed online (https://antumin.github.io/CTI-SOC2M2/).
The tool layout is divided into two parts. On the left-hand side, the CTI-based capability levels for each SOC service can be recorded. For this purpose, a description
is intended to help the user understand the SOC service characteristics. A drop-down menu then allows the user to select a capability level referring to CTI and CTI formats. On the right-hand side, the maturity level is displayed. The maturity level of the assigned to the overall SOC is stated, and a radar chart visualizes the capability breakdown for the SOC services. This visualization enables users to immediately identify deficient SOC services and improve CTI efforts to progress towards a more mature SOC.

![](architecture.png?raw=true)

### Install
Clone the project 
```
git clone https://github.com/antumin/CTI-SOC2M2
```

Open the project and install dependencies (requires [node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
```
npm install
```

Run the programm
```
ng serve
```

### Usage
Open your web browser and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Used in the following research projects
[CTI-SOC2M2 – The quest for mature, intelligence-driven security operations and incident response capabilities (2021)](https://www.sciencedirect.com/science/article/pii/S0167404821003060)

### About the project 

This research was supported by the Federal Ministry of Education and Research, Germany, as part of the BMBF DEVISE project.
For more information visit https://devise.ur.de/ 
