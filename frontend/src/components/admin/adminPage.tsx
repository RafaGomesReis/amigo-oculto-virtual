"use client"

import { useState, useEffect } from 'react';
import { Event } from '../../types/Event';
import { EventItem, EventItemNotFound, EventItemPlaceholder } from './events/EventItemHelpers';

export const AdminPage = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    const loadingEvents = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/events');
            const eventList = await response.json();
            setEvents(eventList);
        } catch (error) {
            console.error('Erro ao carregar eventos:', error);
        } finally {
            setLoading(false);
        }
    }  

    useEffect(() => {
        loadingEvents();
    }, [])


    return (
        <div>
            <div className="flex p-3 items-center">
                <h1 className="text-2xl flex-1 font-bold">Eventos</h1>
                <div>...</div>
            </div>
            <div className="my-3"> 
                {!loading && events.length > 0 && events.map(item =>(
                    <div key={item.id}>{item.title}</div>
                ))}
                {!loading && events.length === 0 && <EventItemNotFound />}
                {loading && 
                <>
                    <EventItemPlaceholder />
                    <EventItemPlaceholder />
                    <EventItemPlaceholder />
                </>}
            </div>
        </div>  
    )
}
