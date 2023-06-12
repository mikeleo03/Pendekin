import React from "react";
import axios from "axios";
import TextInput from "../../components/TextInput/TextInput.tsx";
import Button from "../../components/Button/Button.tsx";
import "./Dashboard.css";

const Dashboard = () => {
    const [showUrlAddView, setShowUrlAddView] = React.useState(false);
    const [urlPayload, setUrlPayload] = React.useState({
        originalLink: "",
        name: "",
    });
    const [shortUrl, setShortUrl] = React.useState("");

    const postDataToApi = async () => {
        if (!urlPayload.originalLink) {
            alert("Please provide original url");
            return;
        }

        try {
            const { data } = await axios.post(
                "http://localhost:5001/api/url",
                urlPayload
            );
            console.log("data from back-end", data);
            setShortUrl(`http://localhost:5001/api/url/${data.urlCode}`);
        } catch (error) {
            console.log(error);
        }
    };

    const renderEmptyState = () => {
        return (
            <div className="dashboard__empty-state">
                <p>You don’t have any short url</p>
                <Button onClick={() => setShowUrlAddView(true)} label="Create a new short url" variant="outlined-primary" />
            </div>
        );
    };

    const renderAddNewUrl = () => {
        return (
            <div className="dashbard__add-new">
                <TextInput
                    label="Original Url"
                    placeholder="https://google.com/test/12"
                    onChange={(val) =>
                        setUrlPayload({ ...urlPayload, originalLink: val.toLocaleString() })
                    }
                />
                <TextInput
                    label="Name"
                    placeholder="Online shopping"
                    onChange={(val) =>
                        setUrlPayload({ ...urlPayload, name: val.toLocaleString() })
                    }
                />
                <div className="dashboard__add-new-actions">
                    <Button label="Generate a short url" onClick={() => postDataToApi()} />
                    <Button label="Cancel" variant="outlined-secondary" onClick={() => setShowUrlAddView(false)} />
                </div>
            </div>
        );
    };

    return (
        <div className="dashboard">
            {showUrlAddView ? renderAddNewUrl() : renderEmptyState()}
            {Boolean(shortUrl) && <h3>{shortUrl}</h3>}
        </div>
    );
};

export default Dashboard;