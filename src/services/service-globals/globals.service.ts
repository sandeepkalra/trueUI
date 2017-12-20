import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';


@Injectable()
export class GlobalsService {
  is_user_admin:boolean = false;
  is_user_logged_in:boolean = true;

  tag_list = [
    { "title": "TagA", "description": "Lorem ipsum dolor siÞ ǽmet, dominġ ādmōðum tǣcimætes cum at, hǣs ǣssentior temporiȝus ǽn, et sea alterūm lūcilīus. Māzim ērǣnt moðerǣtiūs duo te, phīlōsophiǣ dīsputationi īn vim. Ōmnes græēċe spleƿdide mel ex, id prima ǣliquǣm pēricula vim. Ei mei saepe promptā īnermis, cu fālli temporibus pri. Ƿec an accumsǣƿ ċopiosae."},
    { "title": "TagB", "description": "Phǣedrūm suavitate ðuo in, timeam consecteÞuer id vel. Probo māgƿǣ persius ad vis, causǣe minimum convenirē duo ei. MoveÞ līberavissē vōluptatiȝus mea uÞ, ēi ðemocritum ǽbhorreænt cūm. Meā ād eirmod æliquid sensibus, agam ērror voċēnt ēst in. Ðicō nōvum laborē his te, nō pri laūdem rātionibus intēresset, ne cum fabellas īndoctūm suāvitǽte. Niȝh clita incideriƿt pri ēx. Illūm paūlo assentiōr ius in." },
    { "title": "TagC", "description": "Nostrud ǽlienum pēriculā ei cum, ċū usū plaÞonēm abhorreānt. Debītis aliēnum eu hīs. Ēi graēce graecīs deseruisse prō, ðicæm coÞidīeque tē næm. Mel quas tāƿtǣs ocurrēret te." },
    { "title": "TagD", "description": "Iƿermis omitÞǣntur sīÞ ut, mollis fuīsset deÞerruisset sed ǽn, nǣm te sensibus indoctum. Ad seæ suas tōtā oblīque, commune argumentūm īn vis, diċo habemus gloriātur duo æt. Ex omnis fūgit recusabo pēr, id fuisset ċoƿsēquǽt ius, nec lōrem lēġīmūs ex. Ūsu ēuismod eurīpidis honestatis eu, no sit mægnǣ possiÞ opōrteæt. Ið pēr cibō latinē, mea quodsi option āperirī an."},
    { "title": "TagE", "description": "Te aliī sōlet scriptorem vis, æd eum facer āliquām, no cum melīūs appellāntur. Pātrioque nēcessīÞātibus viÞūperætoribus ēst āƿ, per ut āccūmsaƿ sċrīpsērit, qūo essent sċaevola pātrīoque ad. Eǣm affert noluisse lēgendos id. Æn ius quod īustō, per quōt mediocrītātēm æn, cūm integre omnesque gubergren in. Hǣs ēæ ǽliquam sāperet probaÞūs, ēpicurei perfecto pǣÞrioque nō sēa."},
    { "title": "TagF", "description": "Ut mollis ǣccusam est. Ex pāulo graeci doctūs sed, sensērīt deterruissēt est ǽn, quem brute eripuiÞ qui ad. Pro legere dispūtatiōƿi eu, enim omnium no ēǣm, cu hābeo ðigƿīssim iƿcorrupÞe prī. Ād pēr vidiÞ dicit priƿcipēs. Ǣmet vitāē veniam has āt. Qūo īd habeo ullæmċorper."},
    { "title": "TagG", "description": "His laȝore āssueverit ullamcorper ǽt, ūt lūdus vīvendo sit. Prī verītus consēquat ið, an usu soleat ġraece iracundiǣ, dicænt appetēre percīpitur ex vīx. Ƿibh pērfeċto eÞ vix, dolōrum sadipscīng in mel. Læorēet cōnsectētuer et nǽm. Eu eos ǣuguē soleæt, cum quæeque senserit sæðipsciƿġ nē. His errem decore graēco ǽÞ, zril fācēte dēleniti sed eū, mei wisi ādhuc īudicaȝit in."},
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
       observable.next(this.tag_list)
     });
   }

   GetTagDetails(in_title:string) : Observable<any>{
     return Observable.create(observable => {
      var  vTagData = this.tag_list.filter(x => x.title==in_title);

       observable.next(vTagData)
     });
   }


}
