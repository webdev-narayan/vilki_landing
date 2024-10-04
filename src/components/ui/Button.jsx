/* eslint-disable react/prop-types */

{/* <BiPhoneIncoming className="md:h-6 md:w-6 h-5 w-5" /> */ }
const Button = ({ text, Icon, href, action, className }) => {
    return (
        <a
            href={href ?? "tel:+917509095550"}
            onClick={action}
            className={`cursor-pointer  flex gap-2 px-4  py-3 md:px-6 md:py-3 rounded-lg md:text-lg font-medium  justify-center items-center hover:shadow-lg hover:text-gray-50 hover:bg-primary/95 ${className}`}
        >
            {Icon && Icon}
            {text ?? "Button"}
        </a>
    )
}
export const ButtonSm = ({ text, Icon, href, action, className }) => {
    return (
        <a
            href={href ?? "tel:+917509095550"}
            onClick={action}
            className={`cursor-pointer flex gap-2 rounded-[8px] bg-primary  justify-center items-center hover:text-gray-50 hover:bg-primary/95  ${className}`}
        >
            {Icon && Icon}
            {text ?? "Button"}
        </a>
    )
}

export default Button
