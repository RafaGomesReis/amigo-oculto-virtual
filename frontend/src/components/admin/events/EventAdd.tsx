"use client";

import { useState } from "react";
import { InputField } from "../inputField";
import { Button } from "../button";
import { z } from "zod";
import { ErrorItem, getErrorFromZod } from "../../../utils/getErrorFromZod";
import * as api from '../../../fetch/admin';


type Props = {
    refreshAction: () => void;
}

export const EventAdd = ({ refreshAction }: Props) => {
    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');
    const [groupedField, setGroupedField] = useState(false);
    const [errors, setErrors] = useState<ErrorItem[]>([]);
    const [loading, setLoading] = useState(false);

    const eventSchema = z.object({
        titleField: z.string().min(1, 'Título é obrigatório'),
        descriptionField: z.string().min(1, 'Descrição é obrigatória'),
        groupedField: z.boolean()
    });

    const handleAddButton = async () => { 
        setErrors([])
        const data = eventSchema.safeParse({ titleField, descriptionField, groupedField });

        if (!data.success) return setErrors(getErrorFromZod(data.error));
        setLoading(true);
        const eventItem = await api.addEvent({
            title: data.data.titleField,
            description: data.data.descriptionField,
            grouped: data.data.groupedField
        });
        setLoading(false);
        if (eventItem) refreshAction();
    
    }

    return (
        <div>
            <div className="mb-5">
                <label>Título</label>
                <InputField 
                    value={titleField}
                    onChange={(e) => setTitleField(e.target.value)}
                    placeholder="digite o título do evento"
                    errorMessage={errors.find(item => item.field === 'titleField')?.message}
                    disabled={loading}
                />
            </div>
        
            <div className="mb-5">
                <label>Descrição</label>
                <InputField 
                    value={descriptionField}
                    onChange={(e) => setDescriptionField(e.target.value)}
                    placeholder="digite a descrição do evento"
                    errorMessage={errors.find(item => item.field === 'descriptionField')?.message}
                    disabled={loading}
                />
            </div>
            <div className="mb-5">
                <label>Agrupar sorteio?</label>
                <input 
                    type="checkbox" 
                    checked={groupedField}
                    onChange={(e) => setGroupedField(e.target.checked)}
                    className="block w-5 h-5 mt-3"
                    disabled={loading}
                />
            </div>
                <Button
                    value={loading ? 'Adicionando...' : 'Adicionar'}
                    onClick={handleAddButton}
                    disabled={loading}
                />
        </div>
        
    )
}
