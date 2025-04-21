import React, { createContext, useContext, useState, useEffect } from "react";

interface DayPassDiscount {
    value: number;
    message: string;
}

interface Workspace {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    google_maps_url: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    description: string | null;
    rules: string | null;
    amenities: string[];
    images: string[];
    working_hours_start: string;
    working_hours_end: string;
    contact_person_name: string;
    facilities: string | null;
    is_active: boolean;
    is_day_pass_enabled: boolean;
    day_pass_price: number;
    day_pass_discounts_percentage: Record<string, DayPassDiscount>;
    manager_id: string | null;
}

interface WorkspaceContextType {
    workspaceList: Workspace[] | null;
    loading: boolean;
    error: string | null;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(
    undefined
);

export const WorkspaceProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [workspaceList, setWorkspaceList] = useState<Workspace[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorkspaceList = async () => {
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json"
                );
                if (!response.ok) {
                    throw new Error("Error in API call");
                }
                const data = await response.json();
                setWorkspaceList(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkspaceList();
    }, []);

    return (
        <WorkspaceContext.Provider value={{ workspaceList, loading, error }}>
            {children}
        </WorkspaceContext.Provider>
    );
};

export const useWorkspace = () => {
    const context = useContext(WorkspaceContext);
    if (!context) {
        throw new Error("useWorkspace must be used within a WorkspaceProvider");
    }
    return context;
};