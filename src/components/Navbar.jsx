import { useState } from 'react';
import { uselocalStorage } from '../hooks';
import res from '../api/res';


const Navbar = () => {
    const [star, setStar] = uselocalStorage("star", false);
    const [docName, setDocName] = uselocalStorage("docName", "Untitled Document")
    const [meet, setMeet] = useState(false);
    const [acc, setAcc] = useState(false);

    return (
        <>
            <nav className='z-50 h-11 mx-4 mt-2 mb-2 flex justify-between select-none font-poppins'>
                <div className='flex b-blue-200'>
                    <div className="flex items-center font-notosans">
                        <img src={res['docImg']} alt="Docs Logo" className='h-9' draggable='false' />
                    </div>
                    <div className="flex items-start gap-4">
                        <input className='bg-transparent h-6 w-52 p-2 mb-1 text-lg' type="text" name="docName" value={docName} id="docName" onChange={(e) => setDocName(e.target.value)} />
                        <input className="star text-lg -mt-[0.01rem]" type="checkbox" checked={star} title="Star" onChange={(e) => setStar(e.target.checked)} />
                        <button className="" onChange={(e) => setStar(e.target.checked)}>
                            <span className="material-icons-outlined text-lg">
                                drive_file_move
                            </span>
                        </button>
                        <button className="" onChange={(e) => setStar(e.target.checked)} >
                            <span className="material-icons-outlined text-lg">
                                cloud_done
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex">
                        <button className='hover:bg-zinc-200 rounded-full p-2 -mr-4 -mb-1'>
                            <span className="material-icons-outlined">
                                comment
                            </span>
                        </button>
                    </div>
                    <div className="flex">
                        <button className={`hover:bg-zinc-200 pl-4 pr-2 py-2 -mr-3 flex rounded-3xl ${meet ? 'bg-zinc-200' : ''}`} onClick={() => setMeet((prev) => {
                            return !prev
                        })}>
                            <img className='inline h-6 w-6 object-contain' src={res['meetLogo']} alt="" />
                            <span className="material-icons-outlined object-contain ">
                                {meet ? 'arrow_drop_up' : 'arrow_drop_down'}
                            </span>
                        </button>
                    </div>
                    <div className="flex">
                        <button className="bg-[#c2e7ff] hover:bg-sky-200 hover:shadow-lg hover:drop-shadow-sm pl-4 pr-6 items-center rounded-3xl flex gap-2">
                            <span className="material-icons-outlined object-contain text-lg">
                                lock
                            </span>
                            <span>Share</span>
                        </button>
                    </div>
                    <div className='flex'>
                        <button className='' onClick={() => setAcc((prev) => {
                            return !prev
                        })}>
                            <img className='h-8 w-8 rounded-full object-contain' src={res['profileLogo']} alt="profile" />
                        </button>
                    </div>

                </div>

            </nav>
            <div className={`select-none fixed bg-[#feffff] right-0 rounded-md shadow-xl drop-shadow-md z-50  w-80 p-1 mr-[11.5rem] ${meet ? 'visible' : 'hidden'} overflow-auto`}>
                <div className='border-b px-7 py-3'>
                    <div className='text-xl py-2 font-poppins'>
                        Join or start a meeting
                    </div>
                    <div className="text-xs text-center p-7 pt-6">
                        There are no upcoming meetings in your calendar today
                    </div>
                </div>
                <div className='text-sm py-1'>
                    <button className='active:bg-gray-200 px-6 py-3 flex gap-4 w-full'>
                        <span className="material-icons-outlined -mt-[0.1rem]">
                            add
                        </span>
                        <span>Start a new meeting</span>
                    </button>
                    <button className='active:bg-gray-200 px-6 py-3 flex gap-4 w-full'>
                        <span className="material-icons-outlined -mt-[0.1rem]">
                            keyboard
                        </span>
                        <span>Use a meeting code</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar