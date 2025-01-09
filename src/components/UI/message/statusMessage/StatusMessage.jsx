import "./StatusMessage.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

function StatusMessage({ isCorrect}) {
    return (
        <div className="message">
            <p className={isCorrect ? "message-success" : "message-error"}>
                <FontAwesomeIcon icon={isCorrect ? faCircleCheck : faCircleExclamation} style={{ fontSize: 36 }} />
                <span>{isCorrect ? "Ваше сообщение принято!" : "Что-то пошло не так..."}</span>
            </p>
        </div>
    )
}

export default StatusMessage