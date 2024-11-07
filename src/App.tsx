import { ReactNode, useState } from 'react'
import {
    DashboardIcon,
    DocumentCreateIcon,
    DocumentReceivedIcon,
    DocumentSentIcon, DraftIcon,
    TemplateIcon
} from "./components/icons"

export const App = (): ReactNode => {
    const [isHidden, setIsHidden] = useState(false)

    const handleToggle = () => {
        setIsHidden(h => !h)
    }

  return (
      <div className='app-wrapper'>
          <div className={`sidebar ${isHidden ? 'hidden' : ''}`} id="sidebar">

              <button className="toggle-button" onClick={handleToggle}>
                  <span />
                  <span />
                  <span />
              </button>

              <button className="sidebar-button">
                  <div style={{ flexShrink: 0 }}><DashboardIcon /></div>
                  {!isHidden && 'Dashboard'}
              </button>

              <button className="sidebar-button">
                  <div style={{ flexShrink: 0 }}><DocumentSentIcon /></div>
                  {!isHidden && 'Comprobantes enviados'}
              </button>

              <button className="sidebar-button">
                  <div style={{ flexShrink: 0 }}><DocumentReceivedIcon /></div>
                  {!isHidden && 'Comprobantes recibidos'}
              </button>

              <button className="sidebar-button">
                  <div style={{ flexShrink: 0 }}><DocumentCreateIcon /></div>
                  {!isHidden && 'Crear comprobante'}
              </button>

              <button className="sidebar-button">
                  <div style={{ flexShrink: 0 }}><TemplateIcon /></div>
                  {!isHidden && 'Plantillas'}
              </button>

              <button className="sidebar-button">
                  <div style={{ flexShrink: 0 }}><DraftIcon /></div>
                  {!isHidden && 'Borradores'}
              </button>
          </div>
          <div className="container">
              <div className="box" onClick={handleToggle}/>
              <div className="box"/>
              <div className="box"/>
              <div className="box"/>
              <div className="box"/>
              <div className="box"/>
              <div className="box"/>
              <div className="box"/>
              <div className="box"/>
          </div>
      </div>
  )
}
