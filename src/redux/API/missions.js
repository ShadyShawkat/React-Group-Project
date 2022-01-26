const apiUrl = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const response = await fetch(apiUrl);
  const missions = await response.json();
  const array = [];
  missions.forEach((element) => {
    array.push({
      mission_name: element.mission_name,
      mission_id: element.mission_id,
      description: element.description,
      reserved: false,
    });
  });
  return array;
};

export default fetchMissions;
