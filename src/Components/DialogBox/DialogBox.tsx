import React, { useRef, useEffect } from 'react'
import './DialogBox.css'
type DialogBoxType = {
  result: Array<string>
}

const DialogBox: React.FC<DialogBoxType> = ({ result }) => {
  const resultStatus = result[0]
  const playerThatWon = result[1] || null
  const dialogRef = useRef<HTMLDialogElement>(null)
  const refreshPage = () => {
    window.location.reload()
  }

  const closeDialogBox = () => {
    const dialog = dialogRef.current
    if (dialog !== null) {
      dialog.close()
    }
  }

  useEffect(() => {
    if (dialogRef.current !== null && resultStatus !== 'Pending') {
      dialogRef.current.showModal()
    }
  }, [result])
  return (
    <>
      {resultStatus !== 'Pending' && (
        <dialog ref={dialogRef}>
          <button
            className="close-box-btn"
            onClick={() => {
              closeDialogBox()
            }}
          >
            X
          </button>
          <p>
            {resultStatus === 'Won'
              ? `Congratulations ${playerThatWon}, looks like you won! `
              : 'Looks like a draw'}
          </p>

          <button
            className="start-again-btn"
            onClick={() => {
              refreshPage()
            }}
          >
            Start Again
          </button>
        </dialog>
      )}
    </>
  )
}

export default DialogBox
