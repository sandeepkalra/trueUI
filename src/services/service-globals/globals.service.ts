import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';
import {forEach} from '@angular/router/src/utils/collection';


@Injectable()
export class GlobalsService {
  is_user_admin:boolean = false;
  is_user_logged_in:boolean = true;
  active_user_id: number = 101;
  active_user_id_quote_id = 1;
  active_user: any;
  users_list = [
    {
      id: 101,
      "fname": "sandeep",
      "lname":"kalra",
      "created_on": new Date(),
      "tags": ["TagA", "TagD", "TagE"],
      "pic":"pic/path",
      "alias_name": "Sandeep Kalra",
      "City":"Delhi",
      "State":"Delhi",
      "Country":"India",
      "Currency":"INR",
      "Pays_GST": true,
      "Validates": 100,
      "rating":5,
      "email":"sandeep.kalra@sahijawaab.com"
    },
    {
      id: 141,
      "fname": "rohit",
      "lname":"kalra",
      "created_on": new Date(),
      "tags": ["TagE","TagG"],
      "pic":"pic/path",
      "alias_name": "rohit Kalra",
      "City":"Delhi",
      "State":"Delhi",
      "Country":"India",
      "Currency":"INR",
      "Pays_GST": true,
      "Validates": 100,
      "rating":3.5,
      "email":"rohit.kalra@sahijawaab.com",
    },
    {
      id: 111,
      "fname": "deepshikha",
      "lname":"kalra",
      "created_on": new Date(),
      "tags": ["TagG", "TagD", "TagE"],
      "pic":"pic/path2",
      "alias_name": "Deepshikha Kalra",
      "City":"Delhi",
      "State":"Delhi",
      "Country":"India",
      "Currency":"INR",
      "Pays_GST": false,
      "Validates": 0,
      "rating":4,
      "email":"deepshikha.kalra@sahijawaab.com",
    },
    {
      id: 121,
      "fname": "sumit",
      "lname":"kalra",
      "created_on": new Date(),
      "tags": ["TagB", "TagE"],
      "pic":"pic/path",
      "alias_name": "Sumit Kalra",
      "City":"Dallas",
      "State":"Texas",
      "Country":"USA",
      "Currency":"USD",
      "Pays_GST": false,
      "Validates": 50,
      "rating":3,
      "email":"sumit.kalra@sahijawaab.com",
    },
    {
      id: 131,
      "fname": "Bharath",
      "lname":"kalra",
      "created_on": new Date(),
      "tags": ["TagB", "TagC"],
      "pic":"pic/path4",
      "alias_name": "Bharath Kalra",
      "City":"Austin",
      "State":"Texas",
      "Country":"USA",
      "Currency":"USD",
      "Pays_GST": false,
      "Validates": 150,
      "rating":4,
      "email":"bharath.kalra@sahijawaab.com",
    },
  ];

  tag_list = [
    { "title": "TagA", "description": "Lorem ipsum dolor siÞ ǽmet, dominġ ādmōðum tǣcimætes cum at, hǣs ǣssentior temporiȝus ǽn, et sea alterūm lūcilīus. Māzim ērǣnt moðerǣtiūs duo te, phīlōsophiǣ dīsputationi īn vim. Ōmnes græēċe spleƿdide mel ex, id prima ǣliquǣm pēricula vim. Ei mei saepe promptā īnermis, cu fālli temporibus pri. Ƿec an accumsǣƿ ċopiosae."},
    { "title": "TagB", "description": "Phǣedrūm suavitate ðuo in, timeam consecteÞuer id vel. Probo māgƿǣ persius ad vis, causǣe minimum convenirē duo ei. MoveÞ līberavissē vōluptatiȝus mea uÞ, ēi ðemocritum ǽbhorreænt cūm. Meā ād eirmod æliquid sensibus, agam ērror voċēnt ēst in. Ðicō nōvum laborē his te, nō pri laūdem rātionibus intēresset, ne cum fabellas īndoctūm suāvitǽte. Niȝh clita incideriƿt pri ēx. Illūm paūlo assentiōr ius in." },
    { "title": "TagC", "description": "Nostrud ǽlienum pēriculā ei cum, ċū usū plaÞonēm abhorreānt. Debītis aliēnum eu hīs. Ēi graēce graecīs deseruisse prō, ðicæm coÞidīeque tē næm. Mel quas tāƿtǣs ocurrēret te." },
    { "title": "TagD", "description": "Iƿermis omitÞǣntur sīÞ ut, mollis fuīsset deÞerruisset sed ǽn, nǣm te sensibus indoctum. Ad seæ suas tōtā oblīque, commune argumentūm īn vis, diċo habemus gloriātur duo æt. Ex omnis fūgit recusabo pēr, id fuisset ċoƿsēquǽt ius, nec lōrem lēġīmūs ex. Ūsu ēuismod eurīpidis honestatis eu, no sit mægnǣ possiÞ opōrteæt. Ið pēr cibō latinē, mea quodsi option āperirī an."},
    { "title": "TagE", "description": "Te aliī sōlet scriptorem vis, æd eum facer āliquām, no cum melīūs appellāntur. Pātrioque nēcessīÞātibus viÞūperætoribus ēst āƿ, per ut āccūmsaƿ sċrīpsērit, qūo essent sċaevola pātrīoque ad. Eǣm affert noluisse lēgendos id. Æn ius quod īustō, per quōt mediocrītātēm æn, cūm integre omnesque gubergren in. Hǣs ēæ ǽliquam sāperet probaÞūs, ēpicurei perfecto pǣÞrioque nō sēa."},
    { "title": "TagF", "description": "Ut mollis ǣccusam est. Ex pāulo graeci doctūs sed, sensērīt deterruissēt est ǽn, quem brute eripuiÞ qui ad. Pro legere dispūtatiōƿi eu, enim omnium no ēǣm, cu hābeo ðigƿīssim iƿcorrupÞe prī. Ād pēr vidiÞ dicit priƿcipēs. Ǣmet vitāē veniam has āt. Qūo īd habeo ullæmċorper."},
    { "title": "TagG", "description": "His laȝore āssueverit ullamcorper ǽt, ūt lūdus vīvendo sit. Prī verītus consēquat ið, an usu soleat ġraece iracundiǣ, dicænt appetēre percīpitur ex vīx. Ƿibh pērfeċto eÞ vix, dolōrum sadipscīng in mel. Læorēet cōnsectētuer et nǽm. Eu eos ǣuguē soleæt, cum quæeque senserit sæðipsciƿġ nē. His errem decore graēco ǽÞ, zril fācēte dēleniti sed eū, mei wisi ādhuc īudicaȝit in."},
  ];

  questions_list = [
    {
      "q_id": 1,
      "is_public": true,
      "privately_to":[],
      "title" : "patent question",
      "description": "how much time we have to reply to patent queston?",
      "tags": ["TagA", "TagC"],
      "created_by": 101,
      "joined_fname": "sandeep",
      "joined_lname":"kalra",
      "joined_pic":"pic/path",
      "joined_rating":5,
      "comments":[
        {"by": 141 , "comment": "depends, can you clarify more"},
        {"by": 111 , "comment": "USA market I assume, correct?"},
      ],
      "joined_answers":[
        {
          "by": 141,
          "title": "hello, title of answer",
          "description":"description of answer",
          "joined_fname":"rohit",
          "joined_lname":"kalra"
        },
        {
          "by": 111,
          "title": "hello2, title of answer",
          "description":"description of answer",
          "joined_fname":"deepshikha",
          "joined_lname":"kalra"
        },
      ]

    },
    {
      "q_id": 2,
      "is_public": true,
      "privately_to":[],
      "title" : "Salary question" ,
      "description": "how much salary does lawyers get?",
      "tags": ["TagE", "TagC"],
      "created_by": 111,
      "joined_fname": "Bharath",
      "joined_lname":"kalra",
      "joined_pic":"pic/path",
      "joined_rating":2.4,
      "comments":[
        {"by": 141 , "comment": "depends, can you clarify more"},
        {"by": 111 , "comment": "USA market I assume, correct?"},
      ],
      "joined_answers":[
        {
          "by": 141,
          "title": "hello, title of answer",
          "description":"description of answer",
          "joined_fname":"rohit",
          "joined_lname":"kalra",
          "is_paid": true,
          "price": 100,
        },
        {
          "by": 111,
          "title": "hello2, title of answer",
          "description":"description of answer",
          "joined_fname":"deepshikha",
          "joined_lname":"kalra",
          "is_paid": false,
          "price": 0,
        },
      ]
    },
    {
      "q_id": 3,
      "is_public": true,
      "privately_to":[],
      "title" : "Doctors' question" ,
      "description": "how to find good doctor in India? ",
      "tags": ["TagA", "TagG"],
      "created_by": 121,
      "joined_fname": "Deepshikha",
      "joined_lname":"kalra",
      "joined_pic":"pic/path",
      "joined_rating": 1.6,
      "comments":[
        {"by": 141 , "comment": "depends, can you clarify more"},
        {"by": 111 , "comment": "USA market I assume, correct?"},
      ],
      "joined_answers":[
        {
          "by": 141,
          "title": "",
          "description":"",
          "joined_fname":"rohit",
          "joined_lname":"kalra",
          "is_paid": true,
          "price": 120,
        },
        {
          "by": 111,
          "title": "",
          "description":"",
          "joined_fname":"deepshikha",
          "joined_lname":"kalra",
          "is_paid": true,
          "price": 100,
        },
      ]
    },
    {
      "q_id": 4,
      "is_public": true,
      "privately_to":[],
      "title" : "Engineer question" ,
      "description": "how much 5 yr exp. engineers make in software development",
      "tags": ["TagA", "TagC"],
      "created_by": 131,
      "joined_fname": "sandeep",
      "joined_lname":"kalra",
      "joined_pic":"pic/path",
      "joined_rating": 4,
      "comments":[
        {"by": 141 , "comment": "depends, can you clarify more"},
        {"by": 111 , "comment": "USA market I assume, correct?"},
      ],
      "joined_answers":[
        {
          "by": 141,
          "title": "hello, title of answer",
          "description":"description of answer",
          "joined_fname":"rohit",
          "joined_lname":"kalra",
          "is_paid": false,
          "price": 0,
        },
        {
          "by": 111,
          "title": "hello2, title of answer",
          "description":"description of answer",
          "joined_fname":"deepshikha",
          "joined_lname":"kalra",
          "is_paid": false,
          "price": 0,
        },
      ]
    },
    {
      "q_id": 5,
      "is_public": false,
      "privately_to":[141,111],
      "title" : "Magic question" ,
      "description": "How to learn Magic",
      "tags": ["TagE"],
      "created_by": 101,
      "joined_fname": "sandeep",
      "joined_lname":"kalra",
      "joined_pic":"pic/path",
      "joined_rating":5,
      "comments":[
        {"by": 141 , "comment": "depends, can you clarify more"},
        {"by": 111 , "comment": "USA market I assume, correct?"},
      ],
      "joined_answers":[
        {
          "by": 101,
          "title": "",
          "description":"",
          "joined_fname":"sandeep",
          "joined_lname":"kalra",
          "is_paid": true,
          "price": 1000,
        },
        {
          "by": 111,
          "title": "",
          "description":"",
          "joined_fname":"deepshikha",
          "joined_lname":"kalra",
          "is_paid": true,
          "price": 300,
        },
      ]
    }
  ];

  IsUserLoggedIn(): Observable<boolean>{
    return Observable.create(observable => {
      return observable.next(this.is_user_logged_in);
    });
  }

  IsUserAdmin(): Observable<boolean> {
     return Observable.create(observable => {
       return observable.next(this.is_user_admin);
     });
   }

   GetTagList(url : string, path: string, params: any): Observable<any> {
       return Observable.create(observable => {
       observable.next(this.tag_list);
     });
   }

   GetUsersList() : Observable<any[]> {
    return Observable.create(observable => {
      return observable.next(this.users_list);
    });
   }

  GetUsersById(id:number) : Observable<any> {
    return Observable.create(observable => {
      var vUser = this.users_list.filter(x=> x.id == id);
      return observable.next(vUser);
    });
  }

  GetUsersByTags(filter_tags:string[]) : Observable<any[]> {
    return Observable.create(observable => {
      var vUsers = this.users_list.filter(x => {
        for (var i = 0; i < filter_tags.length; ++i){
          if (x.tags.indexOf(filter_tags[i])  != -1) return true;
        }
      });
      observable.next(vUsers);
    });
  }

   GetTagDetails(in_title:string) : Observable<any>{
     return Observable.create(observable => {
      var  vTagData = this.tag_list.filter(x => x.title==in_title);

       observable.next(vTagData);
     });
   }

   GetQuestionByTagFilter(filter_tags: string[]) : Observable <any[]> {
     return Observable.create(observable => {
        var vQuestions = this.questions_list.filter(x => {
          for (var i = 0; i < filter_tags.length; ++i){
            /* Only Public Question , or My Private Questions */
            if ((x.tags.indexOf(filter_tags[i])  != -1) &&
              (x.is_public == true || x.created_by == this.active_user_id)) return true;
          }
        });
       observable.next(vQuestions)
     });
   }

  GetQuestionByIdFilter(filterId: number) : Observable <any[]> {
    return Observable.create(observable => {
      /* Can be Public or Private Question */
      var vQuestions = this.questions_list.filter(x => x.q_id == filterId);
      observable.next(vQuestions)
    });
  }


  GetMyQuestionsList() : Observable <any[]> {
    return Observable.create(observable => {
      /* Can be Public or Private Question */
      var vQuestions = this.questions_list.filter(x => x.created_by == this.active_user_id);
      observable.next(vQuestions)
    });
  }



  SetActiveUser(email:string) : void {
    this.active_user_id = 101;
    for (var i = 0 ; i < this.users_list.length; ++i){
      if (this.users_list[i].email == email) {
        this.active_user_id = this.users_list[i].id;
        this.active_user = this.users_list[i];
        console.log("active_user, id",this.active_user_id,this.active_user );
        return;
      }
    }
  }


  GetAnswersForQuestion(q_id:number, user_id :number) : Observable<any[]>{
    return Observable.create(observable => {
      observable.next(this.questions_list.filter(x => x.q_id == q_id)[0].joined_answers)
    });
  }

  GetActiveUserDetails() : number {
   return this.active_user;
  }

}
