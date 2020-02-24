export class DoctorFinder {
  async findDoctorByCC(complaint) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${complaint}&location=or-portland&sort=distance-asc&skip=0&user_key=${process.env.API_KEY}`);
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