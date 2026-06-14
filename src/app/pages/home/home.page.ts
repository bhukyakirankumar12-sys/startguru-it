import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CareersSectionComponent } from './sections/careers-section/careers-section.component';
import { CaseStudiesSectionComponent } from './sections/case-studies-section/case-studies-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { DeliverySectionComponent } from './sections/delivery-section/delivery-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { IndustriesSectionComponent } from './sections/industries-section/industries-section.component';
import { InsightsSectionComponent } from './sections/insights-section/insights-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section/testimonials-section.component';
import { WhyUsSectionComponent } from './sections/why-us-section/why-us-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServicesSectionComponent,
    IndustriesSectionComponent,
    DeliverySectionComponent,
    CaseStudiesSectionComponent,
    WhyUsSectionComponent,
    InsightsSectionComponent,
    TestimonialsSectionComponent,
    CareersSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('StarGuru IT | Enterprise AI, Cloud & Digital Engineering');
    this.meta.updateTag({
      name: 'description',
      content:
        'StarGuru IT is an enterprise technology partner delivering AI, cloud, data, and digital engineering programs for global organizations.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'StarGuru IT | Enterprise AI, Cloud & Digital Engineering',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Build intelligent platforms with an AI-first, cloud-native engineering partner trusted by enterprises worldwide.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
