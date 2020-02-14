export class DoctorFinder {
  async findDoctorByName(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      if (response.status != 200 || response.ok != true) {
        return false;
      } else {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      }
    } catch(error) {
      return false;
    }
  }
  async findDoctorByCC(complaint) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/conditions?fields=${complaint}&user_key=${process.env.API_KEY}`);
      if (response.status != 200 || response.ok != true) {
        return false;
      } else {
        let jsonifiedResponse = response.json();
        return jsonifiedResponse;
      }
    } catch(error) {
      return false;
    }
  }
}