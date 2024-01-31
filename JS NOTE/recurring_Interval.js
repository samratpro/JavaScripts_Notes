    async function updateKeywords() {
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        const pendingContainer = document.getElementById('pending_keywords_container');
        const runningContainer = document.getElementById('running_keywords_container');

        if(pendingContainer){
            shouldContinueFetching = true;
        }
        else if(runningContainer){
            shouldContinueFetching = true;
        }else{
            shouldContinueFetching = false;
        }

        try {
            const response = await fetch('{% url "info_bulk_posting" %}', {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': csrfToken
                }
            });
    
            const data = await response.json();
    
            document.getElementById('pending_keywords_container').innerHTML = data.keyword_pending;
            document.getElementById('running_keywords_container').innerHTML = data.running_keyword;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        if (!shouldContinueFetching) {
            clearInterval(fetchInterval);  // Stop the periodic fetching
            return;
        }
    
    }
    
    // Start periodic fetching
    const fetchInterval = setInterval(() => {
        updateKeywords().catch(error => console.error('Error in interval:', error));
    }, 1000);
    
    updateKeywords().catch(error => console.error('Error in initial call:', error));
