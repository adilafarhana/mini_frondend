import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViU = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUploads = async () => {
    try {
      const response = await axios.get('http://localhost:3032/viewtask');
      if (Array.isArray(response.data)) {
        setUploads(response.data);
      } else {
        setUploads([]);
        setError('Expected an array but got a different response.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Error fetching uploads: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUploads();
  }, []);

  return (
    <div>
      <h3 className="text-center"><u>Uploaded Files</u></h3>
      {loading ? <p>Loading...</p> : (
        <>
          {error && <p className="text-danger">{error}</p>}
          <table className="table table-light table-striped-columns">
            <thead>
              <tr>
                <th scope="col" className="text-center">Title</th>
                <th scope="col" className="text-center">Due Date</th>
                <th scope="col" className="text-center">File</th>
              </tr>
            </thead>
            <tbody>
              {uploads.length > 0 ? (
                uploads.map(upload => (
                  <tr key={upload._id}>
                    <td className="text-center">{upload.title}</td>
                    <td className="text-center">{upload.dueDate ? new Date(upload.dueDate).toLocaleDateString() : 'N/A'}</td>
                    <td className="text-center">
                      {upload.filePath && (
                        <a href={`http://localhost:3032/${upload.filePath}`} target="_blank" rel="noopener noreferrer">
                          View Uploaded File
                        </a>
                      )}
                      {!upload.filePath && <span>No File Available</span>}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">No uploads found</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ViU;
