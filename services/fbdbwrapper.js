//a faster implementation would be: use 'react-native-firebase';

//import this wrapper this way:
//import { setListener, pushData, initialize } from '../services/fbdbwrapper';

import * as fbdb from "firebase";
import * as s from "./s";

const c = "01230010003200320032003200340097011201050075010101210034005800320034006500730122009700830121006800870085005600490115007001040072010801130048006500850071009501190074005100670069011700690084010500860104005401130095004801080081003400440010003200320032003200340097011701160104006801110109009701050110003400580032003401100097011900970114011401110119004500970053010000490056004601020105011401010098009701150101009701120112004600990111010900340044001000320032003200320034010000970116009700980097011501010085008200760034005800320034010401160116011201150058004700470110009701190097011401140111011900450097005301000049005600460102010501140101009800970115010101050111004600990111010900340044001000320032003200320034011201140111010601010099011600730100003400580032003401100097011900970114011401110119004500970053010000490056003400440010003200320032003200340115011601110114009701030101006601170099010701010116003400580032003401100097011900970114011401110119004500970053010000490056004600970112011201150112011101160046009901110109003400440010003200320032003200340109010101150115009701030105011001030083010101100100010101140073010000340058003200340049004800550049005500570049004800550052005100490055003400100125";

fbdbApp = null;

export const initApi = () => {
  if(!fbdbApp)
      fbdbApp = fbdb.initializeApp(JSON.parse(s.d(c)));
  return fbdbApp;
}

export const setListener = (endpoint, updaterFn) => {
    initApi();
    fbdb.database().ref(endpoint).on('value', updaterFn);
    return () => fbdb.database().ref(endpoint).off();
}

export const getProjects = (updaterFn) => {
  setListener('projects', updaterFn)
};

export const pushProject = (endpoint, data) => {
  initApi();
  return fbdb.database().ref(endpoint).push(data);
}
