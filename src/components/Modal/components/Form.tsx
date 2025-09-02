// import React, { useState, useEffect, useRef } from 'react'
// import { IContacts } from '../modules/contact'

// export interface IForm {
//   selectService?: number
//   sendFeedback?: (body: IContacts) => void
//   isError?: boolean
//   isSuccess?: boolean
//   isLoading?: boolean
// }

// const Form = ({ selectService, sendFeedback, isError, isSuccess, isLoading }: IForm) => {
//   const { data } = useGetServiceNamesQuery('')
//   const [isLegal, setIsLegal] = useState(false)
//   const [isPolicyShown, setIsPolicyShown] = useState(false)
//   const formRef = useRef<HTMLFormElement>(null)

//   const services = data?.data.map((item) => item.attributes.Title)

//   useEffect(() => {
//     if (isError || isSuccess) {
//       formRef?.current?.reset()
//     }
//   }, [isSuccess, isError])

//   return (
//     <>
//       <form
//         ref={formRef}
//         className="grid grid-cols-1 gap-4 lg:col-span-3 lg:grid-cols-4 lg:gap-8"
//         id="ContactsForm"
//         onSubmit={(e) => {
//           e.preventDefault()

//           const body: IContacts = {
//             //@ts-ignore
//             name: e.currentTarget.elements.name.value,
//             //@ts-ignore
//             contact: e.currentTarget.elements.contact.value,
//             //@ts-ignore
//             type: parseInt(e.currentTarget.elements.type.value),
//             //@ts-ignore
//             service: e.currentTarget.elements.service.value,
//             //@ts-ignore
//             description: e.currentTarget.elements.message.value,
//           }

//           sendFeedback && sendFeedback(body)
//         }}
//       >
//         <select
//           id="type"
//           required
//           onInvalid={(e) => {
//             e.currentTarget.classList.add('invalid:border-rose-500')
//             e.currentTarget.setCustomValidity('Тип лица не выбран')
//           }}
//           onChange={(e) => {
//             setIsLegal(e.currentTarget.selectedIndex === 1 ? true : false)
//             setIsPolicyShown(e.currentTarget.selectedIndex === 2 ? true : false)
//             e.currentTarget.setCustomValidity('')
//           }}
//           className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg text-white opacity-80 !outline-none placeholder:text-white/90 valid:border-blue_light hover:opacity-100 focus-visible:rounded-none active:opacity-100 md:px-3 md:py-4 lg:col-span-2"
//         >
//           <option value="">Выберите тип лица</option>
//           <option value="0">Юридическое лицо</option>
//           <option value="1">Физическое лицо</option>
//         </select>
//         <select
//           id="service"
//           required
//           defaultValue={selectService}
//           onInvalid={(e) => {
//             e.currentTarget.classList.add('invalid:border-rose-500')
//             e.currentTarget.setCustomValidity('Специалист не выбран не выбран')
//           }}
//           onChange={(e) => {
//             e.currentTarget.setCustomValidity('')
//           }}
//           className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg text-white opacity-80 !outline-none placeholder:text-white/90 valid:border-blue_light hover:opacity-100 focus-visible:rounded-none active:opacity-100 md:px-3 md:py-4 lg:col-span-2"
//         >
//           <option value="">Выберите тип услуги</option>
//           <option value="0">Не могу выбрать тип услуги</option>
//           {services?.map((item, index) => (
//             <option key={index} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>
//         {isLegal ? (
//           <input
//             placeholder="Наименование юридического лица"
//             id="name"
//             name="name"
//             onInvalid={(e) => {
//               e.currentTarget.classList.add('invalid:border-rose-500')
//               e.currentTarget.setCustomValidity('Название не указано')
//             }}
//             onChange={(e) => {
//               e.currentTarget.setCustomValidity('')
//             }}
//             required
//             className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg text-white opacity-80 !outline-none placeholder:text-white/90 valid:border-blue_light hover:opacity-100 focus-visible:rounded-none active:opacity-100 md:px-3 md:py-4 lg:col-span-2"
//           />
//         ) : (
//           <input
//             placeholder="Ваше имя"
//             id="name"
//             name="name"
//             type="text"
//             required
//             onInvalid={(e) => {
//               e.currentTarget.classList.add('invalid:border-rose-500')
//               e.currentTarget.setCustomValidity('Имя не указано')
//             }}
//             onChange={(e) => {
//               e.currentTarget.setCustomValidity('')
//             }}
//             className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg text-white opacity-80 !outline-none placeholder:text-white/90 valid:border-blue_light hover:opacity-100 focus-visible:rounded-none active:opacity-100 md:px-3 md:py-4 lg:col-span-2"
//           />
//         )}
//         <input
//           placeholder="Ваш телефон или e-mail"
//           type="text"
//           id="contact"
//           name="contact"
//           maxLength={20}
//           required
//           className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg text-white opacity-80 !outline-none placeholder:text-white/90 valid:border-blue_light hover:opacity-100 focus-visible:rounded-none active:opacity-100 md:px-3 md:py-4 lg:col-span-2"
//         />

//         <textarea
//           placeholder="Опишите Вашу проблему"
//           id="message"
//           required
//           onInvalid={(e) => {
//             e.currentTarget.classList.add('invalid:border-rose-500')
//             e.currentTarget.setCustomValidity('Описание не добавлено')
//           }}
//           onChange={(e) => {
//             e.currentTarget.setCustomValidity('')
//           }}
//           className="min-h-[160px] border-2 border-white bg-blue_light/40 px-1 py-2 text-lg text-white opacity-80 !outline-none  placeholder:text-white/90 valid:border-blue_light hover:opacity-100 focus-visible:rounded-none active:opacity-100 md:min-h-[320px] md:px-3 md:py-4 lg:col-span-4"
//         />
//         {!isLegal && isPolicyShown && (
//           <div className="flex gap-2 lg:col-span-4">
//             <input type="checkbox" id="personaldata" name="personaldata" required />
//             <label htmlFor="personaldata">
//               Я ознакомлен с{' '}
//               <a
//                 href="/documents/Personal.pdf"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="font-bold hover:underline hover:underline-offset-2"
//               >
//                 Политикой в области обработки персональных данных
//               </a>{' '}
//               и даю своё согласие на их обработку
//             </label>
//           </div>
//         )}
//         <button
//           type="submit"
//           className="w-full border-2 border-white bg-blue_dark/40 px-1 py-2 text-lg text-white transition-all duration-300 hover:border-blue_light md:px-3 md:py-4 lg:col-span-4"
//         >
//           Отправить заявку
//         </button>
//       </form>
//     </>
//   )
// }

// export default Form
