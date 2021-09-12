import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getNote } from "../../../@fake-db/notesDB";
import PageLayout from "../../shared-components/page-layout";
import NotFound from "../../shared-components/not-found";

const Notes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [note, setNote] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        if(!note) setNote(getNote(id));
        setIsLoading(false)
    }, [note, id])


    if (isLoading) return <div>loading</div>
    if (!note) return <NotFound />

    return (
        <PageLayout header={<h1>Note Detail</h1>} content={<p>{note.content}</p>}/>
    )
}

export default Notes;