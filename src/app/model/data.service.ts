import { EventEmitter, Injectable } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { BehaviorSubject } from 'rxjs';
import { capabilities, Capability, CapabilityLevel, capabilityLevels, MaturityLevel, maturityLevels } from './strings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data = [];
  public maturityLevel = MaturityLevel.None;
  public maturity = maturityLevels[this.maturityLevel].name;
  public capabilities = capabilities;
  public levels = capabilityLevels;
  public dataChange = new BehaviorSubject(this.data);
  public maturityLevels = maturityLevels;

  constructor() {
    this.capabilities.forEach((capability, i) => {
      this.data[i] = 0;
    });
  }

  public dataUpdated(): void {
    this.dataChange.next(this.data);
    this.maturityLevel = this.calculateMaturity(this.data);
    this.maturity = maturityLevels[Math.round(this.maturityLevel)].name;
    console.log(this.maturityLevel)
  }

  private calculateMaturity(data: number[]): MaturityLevel {
    let maturityLevel: MaturityLevel = MaturityLevel.None;
    if (data[Capability.LogAndEventManagement] >= CapabilityLevel.Quality &&
      data[Capability.SecurityMonitoringAnalysisTrheatDetection] >= CapabilityLevel.Quality &&
      data[Capability.VulnerabilityManagement] >= CapabilityLevel.Quality){
        maturityLevel = MaturityLevel.Initial;
      }
    if (data[Capability.LogAndEventManagement] >= CapabilityLevel.Integration &&
      data[Capability.SecurityMonitoringAnalysisTrheatDetection] >= CapabilityLevel.Integration &&
      data[Capability.VulnerabilityManagement] >= CapabilityLevel.Integration &&
      data[Capability.SecurityIncidentManagementIncidentResponse] >= CapabilityLevel.Quality &&
      data[Capability.CoreCyberThreatIntelligence] >= CapabilityLevel.Quality){
        maturityLevel = MaturityLevel.Core;
    }
    if (data[Capability.LogAndEventManagement] >= CapabilityLevel.Integration &&
      data[Capability.SecurityMonitoringAnalysisTrheatDetection] >= CapabilityLevel.Integration &&
      data[Capability.VulnerabilityManagement] >= CapabilityLevel.Integration &&
      data[Capability.SecurityIncidentManagementIncidentResponse] >= CapabilityLevel.Integration &&
      data[Capability.CoreCyberThreatIntelligence] >= CapabilityLevel.Integration &&
      data[Capability.ThreatHuntingPenetrationTestingDigitalForensics] >= CapabilityLevel.Quality){
        maturityLevel = MaturityLevel.Extended;
    }
    if (data[Capability.LogAndEventManagement] >= CapabilityLevel.Automation &&
      data[Capability.SecurityMonitoringAnalysisTrheatDetection] >= CapabilityLevel.Automation &&
      data[Capability.VulnerabilityManagement] >= CapabilityLevel.Automation &&
      data[Capability.SecurityIncidentManagementIncidentResponse] >= CapabilityLevel.Automation &&
      data[Capability.CoreCyberThreatIntelligence] >= CapabilityLevel.Automation &&
      data[Capability.ThreatHuntingPenetrationTestingDigitalForensics] >= CapabilityLevel.Automation){
        maturityLevel = MaturityLevel.Visionary;
    }
    return maturityLevel;
  }
}

