import { CollapseExpanded } from "../components";

export default function WorkExperience() {
  return (
    <div>
      <ul role="list" className="list-disc ml-4">
        <li className="mb-6">
          <div className="font-semibold text-orange-300">
            Practitioner Lecture
          </div>
          <div>FILKOM Universitas Brawijaya Malang</div>
          <div className="font-semibold">Indonesian</div>
          <div>April 2024 - May 2024</div>
          <div className="text-blue-400 font-semibold mt-4">Description:</div>
          <CollapseExpanded gradient={true} limit={300}>
            Provide theoretical and practical training for the utilization of
            Docker in courses Analisa Desain dan Sistem Informasi.
          </CollapseExpanded>
        </li>
        <li className="mb-6">
          <div className="font-semibold text-orange-300">Full Stack Data</div>
          <div>The Edge Property Ltd (edgeprop.sg)</div>
          <div className="font-semibold">Singapore</div>
          <div>December 2021 - December 2022</div>
          <div className="text-blue-400 font-semibold mt-4">Description:</div>
        </li>
      </ul>
    </div>
  );
}
