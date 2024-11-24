const Notifications = () => {
  const notifications = [
    { message: 'Análisis comparativo de modelos de Machine Learning en la clasificación de ocupación de habitaciones usando datos generados a través de IOT', state: 'Aprobado', date: '2024-11-08' },
    { message: 'Aplicación de red neuronal multicapa para el análisis de datos de sensores ambientales en el internet de las cosas', state: 'Pendiente', date: '2024-11-09' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">NOTIFICACIONES</h1>
      
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
             {notification.message} - <i>{notification.state}</i> - <i>{notification.date}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
