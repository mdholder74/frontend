import React, { useEffect, useState } from 'react';

export default function AnalystCard({currentAnalyst}) {
    const [analystCard, setAnalystCard] = useState({
        _id: "",
        name: "",
        personality: "",
        clothingStyle: "",
        nflKnowledge: "",
        favoriteTeam: "",
    });

    const [isEditing, setIsEditing] = useState(false);//false means the data is not being edited

        //handle change function
    //this function will update the state of the analyst object when the user selects a value from the dropdown. The name attribute of the select element will be used as the key and the value of the select element will be used as the value
    const handleInputChange = (e) => {
        setAnalystCard({
            ...analystCard,
            [e.target.name]: e.target.value
        })
    }

    const handleInputSubmit = (e) => {
        e.preventDefault(); //prevents the page from refreshing
        handleEdit(analystCard._id); 
    };
    

    // Fetch analyst data (GET request)
    const getAnalyst = async (id) => {
        try {
            const response = await fetch(`http://localhost:7000/api/trivia/analysts/${id}`);
            const data = await response.json();

            if (response.ok) {
                setAnalystCard(data);
            } else {
                throw new Error(`${data.message} (${response.status})`);
            }
        } catch (error) {
            console.error('Error getting analyst:', error);
        }
    };

    // Update analyst data (PUT request)
    const handleEdit = async (id) => {
        try {
            const response = await fetch(`http://localhost:7000/api/trivia/analysts/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(analystCard)
            });

            const data = await response.json();
            if (response.ok) {
                setAnalystCard(data);// Update the analyst data 
                setIsEditing(false); // Close the form after saving
            } else {
                throw new Error(`${data.message} (${response.status})`);
            }
        } catch (error) {
            console.error('Error editing analyst:', error);
        }
    };

    // Delete analyst (DELETE request)
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:7000/api/trivia/analysts/${id}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error('Error deleting analyst:', error);
        }
    };


    //the effect will run whenever the analystCard._id changes.getAnalyst function is called with the analystCard._id as an argument to fetch the analyst data.
    useEffect(() => {
        if (analystCard._id) {
            getAnalyst(analystCard._id);
        }
    }, [analystCard._id]);

    return (
        <div>
            <div className="analyst-card">
                <h2 className="analyst-header">Meet Your NFL Analyst</h2>
                {isEditing ? (
                    <form className='analyst-form' onSubmit={handleInputSubmit}>
                        <label className="edit-label">EDIT NAME:</label>
                        <input className="edit-trait" type="text" name="name" value={analystCard.name} onChange={handleInputChange}/>
                        <label className="edit-label"> EDIT PERSONALITY:</label>
                        <input className="edit-trait" type="text" name="personality" value={analystCard.personality} onChange={handleInputChange} />
                        <label className="edit-label">EDIT CLOTHING STYLE:</label>
                        <input className="edit-trait" type="text" name="clothingStyle" value={analystCard.clothingStyle} onChange={handleInputChange} />
                        <label className="edit-label">EDIT NFL KNOWLEDGE:</label>
                        <input className="edit-trait" type="text" name="nflKnowledge" value={analystCard.nflKnowledge} onChange={handleInputChange} />
                        <label className="edit-label">EDIT FAVORITE TEAM:</label>
                        <input className="edit-trait" type="text" name="favoriteTeam" value={analystCard.favoriteTeam} onChange={handleInputChange} />
                        <div>
                            <button className="result-btn" type="submit">Save</button>
                            <button className="result-btn" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>

                    </form>
                ) : (
                    <>
                        <p className ="analyst-trait">NAME {currentAnalyst? currentAnalyst.name : ""}🖤</p>
                        <p className ="analyst-trait">PERSONALITY🎙️ {currentAnalyst? currentAnalyst.personality : ""}</p>
                        <p className ="analyst-trait">CLOTHING STYLE👕 {currentAnalyst? currentAnalyst.clothingStyle : ""}</p>
                        <p className ="analyst-trait">NFL KNOWLEDGE💡 {currentAnalyst? currentAnalyst.nflKnowledge : ""}</p>
                        <p className ="analyst-trait">FAVORITE TEAM🏈 {currentAnalyst? currentAnalyst.favoriteTeam : ""}</p>
                        <button type="button" className="result-btn" onClick={() => getAnalyst(currentAnalyst._id)}>Get Results</button>
                        <button type="button" className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
                        <button type="button" className="delete-btn" onClick={() => handleDelete(currentAnalyst._id)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
}


