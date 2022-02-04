import React from 'react';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

function Btn({variant, label, action, className}) {

  const [loading, setLoading] = React.useState(false)
  const fun = e => {
    setLoading(true)
    setTimeout(e => {
      setLoading(false)
    }, 2000)
    action()
    

  }

  return (
    <Button
      type="button"
      variant={variant ?? 'primary'}
      onClick={fun}
      disabled={loading}
      className={className}
    >
      <div >
        {loading 
          ? <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              <span className="sr-only">Загрузка...</span>
            </>
          : <span>{label}</span>
        }
      </div>
    </Button>
  )
}

export default Btn;
 