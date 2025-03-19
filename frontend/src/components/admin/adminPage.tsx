"use client"

import { useState, useEffect } from 'react';
import { Event } from '../../types/Event';
import { EventItem, EventItemNotFound, EventItemPlaceholder } from './events/EventItem';
import { ItemButton } from './itemButton';
import { FaPlus } from 'react-icons/fa';
import { ModalScreen } from '../../types/ModalScreens';
import { Modal } from './modal';
import { EventAdd } from './events/EventAdd';

export const AdminPage = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalScreen, setModalScreen] = useState<ModalScreen>(null);

    const loadingEvents = async () => {
        setModalScreen(null);
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
                <ItemButton
                    IconElement={FaPlus}
                    onClick={() => setModalScreen ('add')}
                />
            </div>
            <div className="my-3">
                {!loading && events.length > 0 && events.map(item => (
                    <EventItem
                        key={item.id}
                        item={item}
                        refreshAction={loadingEvents}
                        openModal={() => { }}
                    />
                ))}
                {!loading && events.length === 0 && <EventItemNotFound />}
                {loading &&
                    <>
                        <EventItemPlaceholder />
                        <EventItemPlaceholder />
                        <EventItemPlaceholder />
                    </>}
            </div>
            {modalScreen &&
                <Modal onClose={() => setModalScreen(null)}>
                    {modalScreen === 'add' && <EventAdd refreshAction={loadingEvents} />}
                </Modal>        
            }
        </div>
    )
}
