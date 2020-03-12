import {axiosWithAuth} from '../../utils/axiosWithAuth'
const data = () => {
    axiosWithAuth
    .get('/country')
    .then(res => { return res.data })
    .catch(error => { return error.message})
}

let s = 123456789;
function random() {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
}
export function generateData(count) {
    var i;
    var id = [data.country_id]
    var country = [data.country_name];
    var confirmed_cases = [data.confirmed_cases];
    var deaths = [parseInt(data.confirmed_cases)];
    var recovered = [parseInt(data.recovered)];
    var server_critical = [parseInt(data.server_critical)];
    var tested = [parseInt(data.tested)];
    var active_cases = [parseInt(data.active_cases)];
    var items = []
   
    for (i = 0; i < count; i++) {


  
    
      var item = {
        id: id,
        countyr:country,
        confirmed_cases:confirmed_cases,
        deaths:deaths,
        recovered:recovered,
        server:server_critical,
        tested:tested,
    active_cases:active_cases
    };
      items.push(item);
    }
    return items;
  }
  

