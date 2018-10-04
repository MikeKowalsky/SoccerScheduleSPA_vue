import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    stadiums: null,
    isLoading: true,
    currentUser: null,
  },
  mutations: {
    APPLY_DATA(state, data) {
      console.log(data);
      // eslint-disable-next-line
      state.data = data;
    },
    SET_LOADING(state, isLoading) {
      // eslint-disable-next-line
      state.isLoading = isLoading;
    },
    SET_USER(state, user) {
      // eslint-disable-next-line
      state.user = user;
    },
    SET_STADIUMS(state, stadiums) {
      // eslint-disable-next-line
      state.stadiums = stadiums;
    },
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  actions: {
    FETCH_DATA({ commit }, { self }) {
      axios.get('https://gitcdn.xyz/repo/drraq/PremierLeague.json/master/data.json') // get clubs info
      // axios.get('https://gitcdn.xyz/cdn/drraq/PremierLeague.json/2198ff3720178643ef8051df1be9addc949fd097/data.json') // get clubs info
      // axios.get('https://gitcdn.xyz/cdn/drraq/PremierLeague.json/fe4e3e1bc5ea4661b3f93720da7e96befdbf9d7b/data.json') // get clubs info
        .then((response) => {
          commit('APPLY_DATA', response.data); // set the data in the store
          commit('SET_LOADING', false); // set isLoading to false in the store
          // console.log(state.data);
          // console.log(`isLoading: ${state.isLoading}`);
          self.printData();
        })
        // eslint-disable-next-line
        .catch(error => console.log(error + " > in fetch/store")); // handle error
    },
    GET_USER({ commit }) {
      // console.log(firebase.auth());
      // eslint-disable-next-line
      const currentUser = firebase.auth().currentUser;
      // eslint-disable-next-line
      if(firebase.auth().currentUser){
        console.log(currentUser.email);
        commit('SET_USER', currentUser.email);
      } else {
        console.log('nobody logged in');
      }
    },
    SET_SET_STADIUMS({ commit }) {
      const stadiums = [
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.6224137446065!2d-0.10853948402685637!3d51.55682241490917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b77fc696a81%3A0x28ad7699e68e10be!2s75+Drayton+Park%2C+London+N7+7AJ%2C+UK!5e0!3m2!1sen!2sde!4v1537999224379',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.1754881997294!2d-1.840467784048579!3d50.73523397468434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48739f479c5b9137%3A0x95f99d19f249ebd9!2sVitality+Stadium!5e0!3m2!1sen!2sde!4v1537999682897',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.358178178247!2d-0.08590498404524455!3d50.86156846553681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487588b0cf7e6a99%3A0x865c543da10d7abc!2sAmerican+Express+Community+Stadium!5e0!3m2!1sen!2sde!4v1537999732377',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.0258451166324!2d-2.2323622839663266!3d53.78902754916094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b96d9615b89d9%3A0x407db5bf9409f3a0!2sTurf+Moor!5e0!3m2!1sen!2sde!4v1537999783917',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2009360354077!2d-3.205200884029087!3d51.47282592105123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e04b49609ff53%3A0xe88c096f452e4380!2sCardiff+City+Football+Club!5e0!3m2!1sen!2sde!4v1537999947299',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.7193105155216!2d-0.19315054878357366!3d51.48166632030561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f864b976f3d%3A0x48aa38781ea565f8!2sStamford+Bridge!5e0!3m2!1sen!2sde!4v1537999993494',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4978.495500581826!2d-0.08557300119541832!3d51.39850231180149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62e298fd93b0de2!2sSelhurst+Park+Stadium!5e0!3m2!1sen!2sde!4v1538000047399',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.659836134464!2d-2.9685133487160797!3d53.43879017538595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b216216d95ae1%3A0x3778ada7c9847359!2sGoodison+Park!5e0!3m2!1sen!2sde!4v1538000085006',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.096731596821!2d-0.2225475487838118!3d51.47473872081196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fa655d1fe21%3A0xe36541c92de8c5c0!2sStevenage+Rd%2C+Fulham%2C+London+SW6+6HH%2C+UK!5e0!3m2!1sen!2sde!4v1538000136670',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364.5457827139417!2d-1.7708102845090268!3d53.6550707592431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bdc171ea52171%3A0xe194b2ed59c5c2dc!2sStadium+Way%2C+Huddersfield+HD1+6PE%2C+UK!5e0!3m2!1sen!2sde!4v1538037208018',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.192273879773!2d-1.1443835487445635!3d52.62036943643963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760d73d562bcb%3A0xcd89e0170e2399aa!2sKing+Power+Stadium!5e0!3m2!1sen!2sde!4v1538000211592',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.1049029525802!2d-2.963024048716339!3d53.43083257598265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21654b02538b%3A0x84576a57e21973ff!2sAnfield!5e0!3m2!1sen!2sde!4v1538000252173',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.1784493154755!2d-2.2025893487144876!3d53.48314127205913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb10dcc950ae3%3A0x549a8dcce67a876a!2sEtihad+Stadium!5e0!3m2!1sen!2sde!4v1538000295383',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.3094891289284!2d-2.2911820487152266!3d53.46292877357552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae0cd71ba635%3A0xb583729cbf08cf99!2sSir+Matt+Busby+Way%2C+Stretford%2C+Manchester%2C+UK!5e0!3m2!1sen!2sde!4v1538000334623',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.8584150401316!2d-1.624716998661653!3d54.97558205903486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e7734e149d773%3A0x1a8a47f46904b314!2sSt+James+Park%2C+Newcastle+upon+Tyne%2C+UK!5e0!3m2!1sen!2sde!4v1538000372902',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.920895810143!2d-1.3919775220121966!3d50.90667978194305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874714eebfb8b1b%3A0x3117606512bd5eea!2sBritannia+Rd%2C+Southampton+SO14+5FP%2C+UK!5e0!3m2!1sen!2sde!4v1538038930795',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.66595298608!2d-0.2817128487810569!3d51.556024114868045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761181d57a876d%3A0xa64f9f185de8e097!2sWembley+Stadium!5e0!3m2!1sen!2sde!4v1538000452257',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.5421653238564!2d-0.40371904877784714!3d51.64990920799472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766add425fce2b%3A0xf9781a1803f93563!2sVicarage+Road+Stadium!5e0!3m2!1sen!2sde!4v1538000491124',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.609991828178!2d-0.018797748781639128!3d51.538712816134506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d6975e8b559%3A0xe7fca44605b6ce94!2sLondon+Stadium!5e0!3m2!1sen!2sde!4v1538000528503',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.8591662095578!2d-2.1326228487455943!3d52.590239438675056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709b8575eeb52b%3A0x784fa301fcde3bf1!2sMolineux+Stadium!5e0!3m2!1sen!2sde!4v1538000569504',
      ];
      commit('SET_STADIUMS', stadiums);
    },
  },
});
