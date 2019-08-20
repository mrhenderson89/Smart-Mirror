import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CardConfigurationModel } from '../../models/card-configuration.model';
import { TabNavigationService } from '../../services/tab-navigation.service';
import { ConfigurationLoader } from '../../configuration-loader';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() selectedTabIndex: number;
  //@HostBinding('class.indigo-pink-dark') darkTheme = true;
  public cardTabs: CardConfigurationModel[];

  constructor(
    private navigationServer: TabNavigationService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    //this.darkTheme = true;

    this.selectedTabIndex = 0;
    this.cardTabs = [];

    this.navigationServer.addObserver({
      next: (newTabIndex: number) => {
        console.log('[TABS] jump to tab ' + newTabIndex);
        this.selectedTabIndex = newTabIndex;
      }
    });
  }

  ngOnInit() {
    console.log('Initialize App for home');

    this.loadCards('home');
  }

  private loadCards(room: string) {
    this.cardTabs = ConfigurationLoader.loadConfiguration(room);
    console.log(`Loaded ${this.cardTabs.length} pages`);
  }

}