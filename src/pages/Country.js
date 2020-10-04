import React from 'react';
import { useParams } from "react-router";
import PageLayout from '../components/PageLayout';

export default function Country() {
    const { id } = useParams();
    const country = id.split("-").join(" ");
    console.log(country)
    return (
        <PageLayout>
            <h1>{country}</h1>
        </PageLayout>
    )
}
