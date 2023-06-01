import { uselocalStorage } from './hooks';
import res from './api/res';
import { Navbar, DocEditor } from './components'


export default function App() {
  const [sidenav, setSidenav] = uselocalStorage("sidenav", true);

  return (
    <div className='font-poppins text-sm overflow-hidden'>
      <Navbar />
      <div className="flex">
        <div className='w-[100%] h-[80vh] '>
          <DocEditor />
        </div>
        <div>

          {/**Sidebar.jsx */}
          <aside className={`${sidenav ? '' : 'hidden'} h-[90vh] w-16 right-0 flex flex-col items-center justify-between py-4`}>
            <div className='w-5 flex flex-col gap-10'>
              <div>
                <img className='cursor-pointer' src={res['calendarLogo']} alt="" />
              </div>
              <div>
                <img className='cursor-pointer' src={res['keepLogo']} alt="" />
              </div>
              <div>
                <img className='cursor-pointer' src={res['tasksLogo']} alt="" />
              </div>
              <div>
                <img className='cursor-pointer' src={res['contactsLogo']} alt="" />
              </div>
              <div>
                <img className='cursor-pointer' src={res['mapsLogo']} alt="" />
              </div>
              <div className='flex justify-center border-t-2 pt-4'>
                <button className='hover:bg-slate-200 rounded-full p-4 w-10 h-10 flex justify-center items-center'>
                  <span className="material-icons-outlined text-lg">
                    add
                  </span>
                </button>
              </div>
            </div>
            <div className='flex justify-center align-middle'>
              <button className='hover:bg-slate-200 rounded-full p-4 w-10 h-10 flex justify-center items-center'
                onClick={(e) => setSidenav(false)}
              >
                <span className="material-icons-outlined text-sm">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </aside>
        </div>
      </div>
      <button className='fixed mt-2 flex items-center justify-end -right-5 shadow-xl hover:drop-shadow-xl h-5 w-7 rounded-full px-10 py-5' onClick={(e) => setSidenav(true)}>
        <span className="material-icons-outlined text-base">
          arrow_back_ios
        </span>
      </button>
      <button className='fixed mt-2 ml-8 flex items-center justify-center top-28 hover:bg-zinc-200 h-5 w-5 rounded-full p-5'>
        <span className="material-icons-outlined text-2xl">
          format_list_bulleted
        </span>
      </button>
    </div>
  );
}