import React from 'react'
import Alert from './Alert'

function Ajanvaraus() {
  return (
    <div>
        <label htmlFor="ajanvaraus_modal" className="btn btn-sm bg-emerald-400 hover:bg-emerald-600 text-neutral-800 hover:text-neutral-200 font-semibold">Varaa Aika</label>
        <input type="checkbox" id="ajanvaraus_modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-neutral-800 max-w-4xl">
              <div className="flex flex-row justify-between items-center">
                  <h1 className="text-neutral-200 text-2xl font-semibold">Ajanvaraus</h1>
                  <label htmlFor="ajanvaraus_modal" className="btn text-neutral-100 bg-red-500 hover:bg-red-600">Sulje</label>
              </div>
              <Alert />
              <div id="vello-wizard"></div>
              <div className="modal-action"></div>
          </div>
        </div>
    </div>
  )
}

export default Ajanvaraus
