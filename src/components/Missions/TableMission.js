import React from 'react';
import { useSelector } from 'react-redux';
import MissionItem from '../MissionItem/MissionItem';

const TableMission = () => {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <div className="rounded-md w-full ">
      <div className=" flex items-center justify-between" />
      <div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mission
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Join</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {missions.map((mission) => (
                  <MissionItem mission={mission} key={mission.mission_id} />
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMission;
