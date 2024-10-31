import { AiOutlineCloudDownload } from 'react-icons/ai';

function DownloadButton() {
  return (
    <a href="/hina zeeshan front end developer.pdf" download>
      <button className="inline-flex text-white items-center bg-sky-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Download CV
        <span className="text-xl ml-2">
          <AiOutlineCloudDownload />
        </span>
      </button>
    </a>
  );
}

export default DownloadButton;