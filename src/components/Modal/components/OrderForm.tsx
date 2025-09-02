// import React, { useState, useEffect } from 'react'
// import { useSendFeedbackMutation } from '../store/web/contact.api'
// import Modal from '..'
// import Form from './Form'

// interface IOrderForm {
//   isActiveOrderForm: boolean
//   setIsActiveOrderForm: React.Dispatch<React.SetStateAction<boolean>>
// }

// const OrderForm: React.FC<IOrderForm> = ({ isActiveOrderForm, setIsActiveOrderForm }) => {
//   const [sendFeedback, { isError, isSuccess, isLoading }] = useSendFeedbackMutation()
//   const [isActiveSendModal, setIsActiveSendModal] = useState(false)

//   useEffect(() => {
//     if (!isActiveOrderForm && (isSuccess || isError)) {
//       setIsActiveSendModal((i) => !i)
//     }
//   }, [isSuccess, isError])

//   useEffect(() => {
//     if (isLoading) {
//       console.log('loading start')
//       setIsActiveOrderForm(false)
//     } else {
//       console.log('loading stop')
//     }
//   }, [isLoading])

//   return (
//     <>
//       <Modal
//         isOpen={isActiveOrderForm}
//         setIsOpen={setIsActiveOrderForm}
//         onClose={() => {
//           setIsActiveOrderForm(false)
//         }}
//       >
//         <Form sendFeedback={sendFeedback} isError isSuccess isLoading></Form>
//       </Modal>
//       <Modal
//         isOpen={isActiveSendModal}
//         setIsOpen={setIsActiveSendModal}
//         onClose={() => {
//           setIsActiveSendModal(false)
//         }}
//       >
//         {isSuccess ? (
//           <div className="flex flex-col justify-center gap-2 text-lg">
//             <span>Ваше сообщение отправлено!</span>
//             <span>В ближайшее время с Вами свяжется наш специалист.</span>
//           </div>
//         ) : (
//           <div className="flex flex-col justify-center gap-2 text-lg">
//             <span>
//               Приносим свои извинения, но в данный момент сообщение не может быть отправлено.
//             </span>
//             <span>Попробуйте изменить заполняемые данные или попробуйте другие способы связи.</span>
//             <span>Спасибо за понимание!</span>
//           </div>
//         )}
//       </Modal>
//       {isLoading && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-25 backdrop-blur-[5px]">
//           <div className="h-24 w-24 animate-spin rounded-full border-8 border-solid border-blue_light border-t-transparent"></div>
//         </div>
//       )}
//     </>
//   )
// }

// export default React.memo(OrderForm)
