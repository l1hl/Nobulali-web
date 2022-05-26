import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgwWowService } from 'ngx-wow'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrls: ['./productions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductionsComponent implements OnInit {

  id: string
  pageSize = 6
  pageNumber: number

  constructor(
    private wowService: NgwWowService,
    private router: Router,
    private _Activatedroute: ActivatedRoute
  ) {
    this.wowService.init()
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');

      // alert(this.id)
    });
  }

  productions = [
    {
      image: '../../../assets/images/productions/prod_4.png',
      title: 'Sophiatown',
      text: [`Sophiatown is definitely one of the highlights from South Africa’s struggle theatre canon.It is simultaneously a touching tragedy and an entertaining celebration.The play documents and immortalises the bygone cultural hub that was Sophiatown.`],
      type: 'Film'
    },
    {
      image: '../../../assets/images/productions/prod_2.png',
      title: 'Home Affairs',
      text: [
        `Home Affairs is a South African television drama series created and produced by Roberta Durrant for Penguin Films which tells the story of nine very different women whose lives are interconnected by universal synchronicity and examines the connections people share with one another, unwittingly or not.`,
        `The series aired on SABC1 from 14 July, 2005 to 11 March, 2010. There are 65 hour-long episodes in four seasons. See "Seasons" below for seasonal broadcast dates and times.`,
        `Season 2 originally aired on SABC1 from 10 January to 4 April, 2006, on Tuesdays at 22h00. New episodes broadcast weekly. There are 13 episodes in the second season.`
      ],
      type: 'TV Series',
      characterName: "Yoli",
      timeLine: [
        {
          season: 'Season 2',
          channel: 'SABC 1',
          premiere: '10 Jan 2006',
          finale: '06 Oct 2006',
          txTime: 'Tuesdays, 22h00'
        },
        {
          season: 'Season 3',
          channel: 'SABC 1',
          premiere: '31 May 2007',
          finale: '23 Aug 2007',
          txTime: 'Thursdays, 21h00'
        },
        {
          season: 'Season 4',
          channel: 'SABC 1',
          premiere: '3 Sep 2009',
          finale: '11 Mar 2010',
          txTime: 'Thursdays, 20h30'
        }
      ]
    },
    {
      image: '../../../assets/images/productions/izingane_zobaba.jpeg',
      title: 'Izingane zoBaba',
      text: [
        `Izingane zoBaba is adapted from King Lear by writers Portia Gumede and Thomas Hall, and transposes the drama and intrigue of the original tale’s royal family to a modern business context in Kwazulu-Natal.`,
        `Set in world of the coal distribution industry of Richards Bay, Izingane zoBaba depicts the lives of two families torn apart by jealousy, greed and deception.`,
        `The Shakespearean themes of pride, betrayal, reconciliation and the descent into madness are brought to life in this dynamic modern setting.`,
        `When aging businessman, Nkwazi Nkosi, allows his family corporate empire to be filmed by a documentary crew from the news magazine programme Inside Access, he sets in motion a series of events which lead to the destruction of both his family and his business.`
      ],
      type: 'TV Series',
      characterName: "Kholekile Nkosi",
      timeLine: [
        {
          season: 'Season 1',
          channel: 'SABC 1',
          premiere: '22 Apr 2008',
          finale: '27 May 2008',
          txTime: 'Tuesdays, 20h30'
        }
      ]
    },
    {
      image: '../../../assets/images/productions/jacobs_cross.jpeg',
      title: `Jacob's Cross`,
      text: [
        `Jacob's Cross is a South African television drama series produced by Bomb about powerful oil magnates battling for Africa's rich off-shore oil resources.`,
        `Set in both South Africa and Nigeria, the story centres around businessman Jacob Makhubu and his quest to build the next great South African empire.`,
        `The people in Jacob's world are all driven by a shared history of colonisation and desire to tap into the wealth of Africa while being divided by feuds over who the rightful owners of the resources are, how they should be exploited and who should benefit.`
      ],
      type: 'TV Series',
      characterName: "Ntombi",
      timeLine: [
        {
          season: 'Season 3',
          channel: 'M-Net',
          premiere: '04 Jun 2008',
          finale: '17 Dec 2008',
          txTime: 'Wednesdays, 21h30'
        }
      ]
    },
    {
      image: '../../../assets/images/productions/kowethu.jpeg',
      title: `Kowethu`,
      text: [
        `Kowethu is a South African television drama series created by Linda Bere and Chisanga Kabinga and produced by Doppelganger Productions which follows a group of strangers brought together under unusual circumstances in a rural village called Kowethu, who decide - for a variety of different reasons - to stay in the town as fugitives, each of them hiding from something in their past.`,
        `Kowethu is about the arrival of strangers, running away from their pasts and looking to start a new life, in an obscure village street... somewhere in the region between KZN and the Eastern Cape.`
      ],
      type: 'TV Series',
      characterName: "Thandeka",
      timeLine: [
        {
          season: 'Season 1',
          channel: 'SABC 1',
          premiere: '13 Oct 2014',
          finale: '05 Jan 2015',
          txTime: 'Mondays, 20h30'
        }
      ]
    },
    {
      image: '../../../assets/images/productions/prod_3.png',
      title: `Rhythm City`,
      text: [
        `Rhythm City is a South African television soap opera created by Rolie Nikiwe and Neil McCarthy, developed by Harriet Gavshon, David Jammy and Monde Twala and produced by Quizzical Pictures (formerly known as Curious Pictures) which is set in the world of the South African music industry, blending youth and contemporary adult culture and giving a realistic glimpse into the world of music showbiz and the lives of the people who inhabit it.`,
        `Set in the world of the South African music industry the show blends youth and contemporary adult culture and aims to give a realistic glimpse into the world of music showbiz and the lives of the people who inhabit it.`,
        `The action takes place in the city, townships and suburbs of Johannesburg and puts the spotlight on the power battles that happen in the music industry.`,
        `Storylines revolve around record companies, promoters, producers, DJs and the stars as well as the wannabe stars, has-beens and everyone's families and lovers.`
      ],
      type: 'TV Series',
      characterName: "Nkhensani Tshinawa",
      timeLine: [
        {
          season: 'Season 1',
          channel: 'e.tv',
          premiere: '2007',
          finale: '2008',
          txTime: 'Weekdays, 19h00'
        }
      ]
    },
    {
      image: '../../../assets/images/productions/safe.jpeg',
      title: `Safe As Hauser's`,
      text: [
        `Safe As Hauser's, a situation comedy set in the world of a privately owned security company, follows the always amusing, often hilarious daily exploits of a group of civic minded misfits joined in their mission to protect and serve the community.`,
        `Lurching from crisis to crisis, Hauser's Security survives on a wing and a prayer. Nigel Hauser, after giving up his job as a disaffected primary school teacher some dozen years ago, is following his dream of running his own security company.`,
        `Set in a residential middle-class dwelling in the north-western suburbs of Johannesburg, Nigel has converted a 3-bedroomed house into his "Security Hub".`,
        `Aided by his motley crew – among them the loose-cannon Doug Tremaine, dedicated newcomer Tyson Ngubane, gum-chewing Chi-Chi Moeketsi-Adams and the ever faithful, closet detective Dotty Sithole – Nigel Hauser works tirelessly to overcome the daily challenges that confront them.`
      ],
      type: 'TV Series',
      characterName: "Chi-Chi Moeketsi-Adams",
      timeLine: [
        {
          season: 'Season 1',
          channel: 'SABC 3',
          premiere: '4 Apr 2013',
          finale: '2008',
          txTime: 'Thursdays, 20h00'
        }
      ]
    },
    {
      image: '../../../assets/images/productions/society.jpeg',
      title: `Society`,
      text: [
        `Society is set in the urban jungle of post-apartheid South Africa, Johannesburg. An icon of prosperity and everything that Africa could be, most of its residents are still digging for gold in the corporate structures and environments of the modern age, but in essence still seeking their fortune.`,
        `Many South Africans and other Africans make the pilgrimage to this city all with the hopes that they'll be able to realise and live the African dream. The main characters are just four of the 4-million people living in and around the city.`,
        `The universe of Society seeks to put a microscope on the effects freedom and free trade has had on the lives of young black South Africans, BEE Buppies, who are taking advantage of all that the city has to offer.`
      ],
      type: 'TV Series',
      characterName: "Sara",
      timeLine: [
        {
          season: 'Season 2',
          channel: 'SABC 1',
          premiere: '27 Oct 2009',
          finale: '20 Apr 2010',
          txTime: 'Tuesdays, 20h30'
        }
      ]
    },
    {
      image: '../../../assets/images/productions/prod.png',
      title: 'Tjovitjo',
      text: [
        `Tjovitjo is a South African television drama series which follows a pantsula dancer called Mafred who realises his dreams of leading the biggest dance troupe ever are fading, leading to increasing frustration at himself and those around him.`,
        `Low life dance group leader Mafred (Warren Masemola) no longer has the same kind of agility he used to have. From a distance, he can see his dream disappearing and frustration mounts, causing him to exhibit explosive and irrational behaviour, which often costs his dance group Tjovitjo.`,
        `And when a new person arrives in this community of Tjovitjo, and starts developing feelings for a girl Mafred is also eyeing, it makes matters worse for him and sets up a love triangle conflict.`
      ],
      type: 'TV Series',
      link: 'https://www.youtube.com/embed/IJ4aBCszGeg',
      characterName: "Mandisa",
      timeLine: [
        {
          season: 'Season 1',
          channel: 'SABC 1, Netflix South Africa',
          premiere: '20 Aug 2017',
          finale: '12 Nov 2017',
          txTime: 'Sundays, 20h00'
        },
        {
          season: 'Season 2',
          channel: 'SABC 1, Netflix South Africa',
          premiere: '11 Feb 2018',
          finale: '06 May 2018',
          txTime: 'Sundays, 20h00'
        }
      ]
    },
    {
      image: '../../../assets/images/productions/hard_copy.jpeg',
      title: 'Hard Copy',
      text: [`Hard Copy is a South African television drama series created by Anton Harber, Malcolm Purkey and Jann Turner which follows the fortunes of the staff of a fictional newspaper which - due to the economic pressures of the times - finds itself on the media cusp between delivering news and sensationalism, before changing identity completely in Season 3 and becoming a tabloid.`,
        `The tabloid storyline was dropped when the show was revived in 2016, a decade after it ended on SABC3`,
        `When editors and their journalists find themselves publishing hard copy the dilemmas, intrigues and moments of hysteria they face are varied, vast and inevitable.`,
        `This is the life of the staff and owners of The Bulletin, a South African newspaper that finds itself on the media cusp between delivering news and sensationalism.`,
        `Every day at The Bulletin sees the papers editor and journalists facing new challenges as they find and write stories that impact on who they are, often forcing them to make ethical decisions that have more than one answer.`,
        `Through The Bulletin and the people featured in it, including politicians, showbiz and sports personalities, everyone's lives become one as the staff eat, sleep and breathe their passion of getting their paper to print each week.`,
        `Produced by Curious Pictures (which later became Quizzical Pictures), the head writer was Darrel Bristow-Bovey, with original music by The Junior Musicians' Yacht Club. The series producer was Tim Greene and the executive producers were Harriet Gavshon, David Jammy and Mpho Mosimane.`
      ],
      type: 'TV Series',
      characterName: "Thuliswa",
      timeLine: [
        {
          season: 'Season 2',
          channel: 'SABC 3',
          premiere: '12 Oct 2005',
          finale: '04 Jan 2006',
          txTime: 'Wednesdays, 21h00 -21h30'
        },
        {
          season: 'Season 3',
          channel: 'SABC 3',
          premiere: '20 Sep 2006',
          finale: '13 Dec 2006',
          txTime: 'Wednesdays, 20h30 -21h00'
        }
      ]
    },
    {
      title: "When We Were Black",
      image: '../../../assets/images/productions/when_we_were_black_2.jpg',
      text: [
        `It is Soweto, 1976, and Fistos, an intelligent but shy teenager, meets Mangi, the girl of his dreams.`,
        `The daughter of a local liberation preacher, she is the on-off girlfriend of Modise, a rising star in the world of student politics.`,
        `Fistos is smitten, and being the target of the school gang doesn't help either. Now, not only must he confront these bullies, but he must cloak his sexual desires and learn the art of seduction within a revolutionary context.`
      ],
      type: 'TV Series',
      characterName: "Mangi",
      timeLine: [
        {
          season: 'Season 1',
          channel: 'SABC 1',
          premiere: '21 Dec 2006',
          finale: '11 Jan 2007',
          txTime: 'Thursdays, 21h00 -21h00'
        }
      ]
    },
    {
      title: "A place called home",
      image: '../../../assets/images/productions/prod_6.jpeg',
      text: [
        `A Place Called Home is a South African television drama series produced for SABC1 by T.O.M. Pictures and based on the novels Finding Mr. Madini and Great African Spider Writers by Jonathan Morgan about a writer who inspires and finds inspiration from homeless people living in Johannesburg.`,
        `The series originally aired on SABC1 from 20 December, 2006 to 25 February, 2009. There are 39 half-hour episodes in two seasons. See "Seasons" below for seasonal broadcast dates and times.`,
        `Season 1 originally aired on SABC1 from 20 December, 2006 to 14 March, 2007, on Wednesdays at 20h30. New episodes broadcast weekly.`,
        `A rebroadcast of Season 1 premiered on SABC1 on Monday 19 August 2013, at 22h00. New episodes broadcast weekly. There are 13 episodes in the first season.`
      ],
      type: 'Tv Series',
      characterName: "Thuli",
      timeLine: [
        {
          season: 'Season 1',
          channel: 'SABC 1',
          premiere: '20 Dec 2006',
          finale: '14 Mar 2007',
          txTime: 'Wednesdays, 21h00 -21h30'
        }
      ]
    },
    {
      title: "Heartlines",
      image: '../../../assets/images/productions/heartlines.jpeg',
      text: [
        `Heartlines is a South African television anthology series produced by Curious Pictures as part of the multimedia Mass Media Project, a concentrated campaign aimed at educating South Africans about religion-based values using print, radio and television.`,
        `Based on the premise that South Africans - no matter what their race, colour or creed - share many of the same core values, the MMP aims to use multi media to create debate about, and reinforce these core values, through a variety of projects.`,
        `Heartlines is a series of seven self-contained, one-hour TV drama films plus one 96-minute feature film. All the films are in a combination of South African languages with English sub-titles.`,
        `Heartlines is based on the assumption that the promotion of values is the most effective way to deal with major social problems. Therefore, by looking at the issues that face South Africa today, Heartlines chose the values they believe would best address these.`,
        `South Africa's current reality includes high levels of HIV & AIDS, violence, corruption, drug abuse, family breakdown and unemployment.`,
        `At the same time, the vast majority of South Africans (84%) affiliate themselves with faiths which embrace a belief in values such as compassion, forgiveness and honesty.`,
        `The films deal with eight core values which aim to take the viewer to the heart of the matter. These values are:`,
        `Accepting Difference, Responsibility, Forgiveness, Perseverance, Self-Control, Honesty, Compassion, Second Chances`,
        `Eight weeks, eight values, one national conversation is the rallying cry of a campaign aimed at creating national awareness of the eight values.`
      ],
      type: 'Tv Series',
      characterName: "Thuli",
      timeLine: [
        {
          season: 'Season 1',
          channel: 'SABC 1',
          premiere: '16 Jul 2006',
          finale: '10 Sep 2006',
          txTime: 'Wednesdays, 20h00 -21h00'
        }
      ]
    },
    {
      title: "African Adaptation of George Owell's Animal Farm",
      image: '../../../assets/images/productions/animal.jfif',
      text: [`The stage production of the play featured an all-female cast and took on a more modern day approach to the story of a rivalry between two pigs - Napoleon and Snowball who initially work together to overthrow farmer, Mr Jones.`],
      type: 'Theatre'
    },
    {
      title: "John Kani’s Nothing but the truth",
      image: '../../../assets/images/productions/nothing_2.jpg',
      text: [`A newly married woman prays for her husband to stop telling lies, however when her prayer comes true her husband's honesty causes chaos wherever he goes.`],
      type: 'Theatre'
    },
    {
      title: "Humans at Work",
      image: '../../../assets/images/default.png',
      text: [`Humans at Work is a snapshot of real working life in a Coventry factory. A factory, a city and a nation that finds itself on the cusp of major change.`],
      type: 'Theatre'
    }
  ]

  apiLoaded = false;
  filteredProd = this.productions

  prodLength = this.filteredProd.length;
  selectedProd: number = 0
  viewProd = this.filteredProd[this.selectedProd]
  sort: string
  more: boolean

  selectProd(prodId) {

    if (this.pageNumber >= 2) {
      this.selectedProd = ((this.pageNumber - 1) * this.pageSize) + prodId
    } else {
      this.selectedProd = prodId
    }
    this.viewProd = this.filteredProd[this.selectedProd]
  }

  viewNext() {
    if (this.prodLength == 1) {
      this.viewProd = this.filteredProd[0]
    } else if (this.selectedProd === this.prodLength - 1) {
      this.selectProd(this.selectedProd)
    } else {
      this.selectedProd++
      this.viewProd = this.filteredProd[this.selectedProd]
    }

  }

  viewPrev() {
    if (this.selectedProd >= 1) {
      this.selectedProd--
      this.viewProd = this.filteredProd[this.selectedProd]
    }
  }

  filterProd(filterTerm) {
    if (filterTerm == null) {
      this.filteredProd = this.productions
      this.prodLength = this.filteredProd.length
    } else {
      this.filteredProd = this.productions.filter(prod => prod.type === filterTerm)
      this.prodLength = this.filteredProd.length
    }
  }


  cleanUrl(link) {
    var linkParts = link.split('/')
    return (linkParts[linkParts.length - 1])
  }

  loadMore() {
    this.more = !this.more;
  }

  ngOnInit(): void {

    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  pageChanged(e) {
    this.pageNumber = e
  }

}
