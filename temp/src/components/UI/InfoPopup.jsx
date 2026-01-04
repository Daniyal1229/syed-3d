import useStore from '../../store/useStore'

export default function InfoPopup() {
  const { popupContent, setShowPopup } = useStore()
  
  if (!popupContent) return null
  
  return (
    <div className="info-popup">
      <button
        className="close-popup"
        onClick={() => setShowPopup(false)}
      >
        ×
      </button>
      
      <h2>{popupContent.title}</h2>
      
      {popupContent.description && (
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          {popupContent.description}
        </p>
      )}
      
      {popupContent.items && popupContent.items.length > 0 && (
        <ul>
          {popupContent.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      
      <p style={{ 
        marginTop: '15px', 
        fontSize: '14px', 
        color: '#888',
        textAlign: 'center' 
      }}>
        Keep driving to explore more! 🚗
      </p>
    </div>
  )
}

