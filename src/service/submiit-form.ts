

interface FormResponse {
    success: boolean;
}

export type submitFormT = {
    name: string;
    tell: string;
    telegram?: string;
}



async function submitForm({ name, tell, telegram }: submitFormT): Promise<boolean> {
    try {
        // Создаем объект FormData
        const formData = new FormData();
        formData.set('lead_type', "🔴 Traffic Days 🔴");
        formData.set('name', name);
        if (telegram) formData.set('telegram', telegram);

        // Функция для извлечения UTM параметров из URL
        function getUTMValue(param: string): string {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.has(param) ? urlParams.get(param) || '' : '';
        }

        formData.set('tell', tell);

        const gclid = localStorage.getItem('gclid');
        if (gclid) {
            formData.set('gclid', gclid);
        }

        // Добавляем UTM параметры в formData
        formData.append('utm_source', getUTMValue('utm_source'));
        formData.append('utm_medium', getUTMValue('utm_medium'));
        formData.append('utm_campaign', getUTMValue('utm_campaign'));
        formData.append('utm_term', getUTMValue('utm_term'));
        formData.append('utm_content', getUTMValue('utm_content'));

        // Отправляем запрос
        const response = await fetch('https://script.google.com/macros/s/AKfycbx_a9wvuTrhaHeBkWOmJKeAYmGShAtRMSG6Xs4bWl_kfSCv_miN-fmi0yDwiGusAC0/exec', {
            method: 'POST',
            body: formData,
        });


        const data: FormResponse = await response.json();

        if (data.success) {
            return true;
        } else {
            console.error('Помилка: unsuccessful response');
            return false;
        }
    } catch (error) {
        console.error('Помилка:', error);
        return false;
    }
}

export default submitForm;