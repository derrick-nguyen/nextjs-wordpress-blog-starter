/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect } from "react";

interface SchemaMarkupProps {
    schema: Record<string, any>;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, [schema]);

    return null;
};

export default SchemaMarkup;
