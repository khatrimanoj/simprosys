import React, {useState} from 'react';
import Button from './Button';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        console.log('Fetching data...');
        setLoading(true);

        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/data.json', true);   

        xhr.onload = function() {
            if (xhr.status === 200) {
                const jsonData = JSON.parse(xhr.responseText);
                console.log('Response:', jsonData);
                setData(jsonData);
                if(jsonData && jsonData.employees && jsonData.employees.employee) {
                    setData(jsonData.employees.employee);
                }
                else {
                    console.error('No data found');
                }
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
            setLoading(false);
        };
        xhr.onerror = function() {
            console.error('Network error');
            setLoading(false);
        };
        xhr.send();
      };

      return(
        <div className="App">
            <h1>User Data</h1>
            <Button label="Fetch Data" onClick={fetchData} />
            {loading && <p>Loading...</p>}
            {!loading && data.length > 0 && (
                <div>
                    <table border={1} cellPadding={10} cellSpacing={0}>
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td><img src={item.photo} alt={item.name} width={80}/></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>  
      )
}

export default App;
