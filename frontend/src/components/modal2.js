import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { openReducer } from '../redux/notificationSlice';
import {useSelector,useDispatch} from 'react-redux';



export default function Modal2(props) {
    const notification=useSelector(state=>state.openNotification.openModal);
    const dispatch=useDispatch()


    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={notification} as={Fragment}>

            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={dispatch(openReducer(false))}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto" >
                    <div className="flex min-h-full items-end justify-center p-4 text-center ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"></div>
                                <p>hello</p>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
