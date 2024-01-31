  async function updateKeywords() {
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        // Check if there are any rows in the containers
        const pendingContainer = document.getElementById('pending_keywords_container');
        const runningContainer = document.getElementById('running_keywords_container');
        try {
            const response = await fetch('{% url "info_bulk_posting" %}', {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': csrfToken
                }
            });
    
            const data = await response.json();
            if (data.running_keyword != "\n" || data.keyword_pending != "") {
                console.log('Task Alive...')
                if (data.running_keyword) {
                    runningContainer.innerHTML = data.running_keyword;
                } else {
                    runningContainer.innerHTML = '<tbody id="running_keywords_container"></tbody>';
                }
            
                if (data.keyword_pending) {
                    pendingContainer.innerHTML = data.keyword_pending;
                } else {
                    pendingContainer.innerHTML = '<tbody id="pending_keywords_container"></tbody>';
                }
            } else {
                runningContainer.innerHTML = '<tbody></tbody>';
                pendingContainer.innerHTML = '<tbody></tbody>';
                console.log('Finish All Pending Taks..')
                clearInterval(fetchInterval);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    // Start periodic fetching
    const fetchInterval = setInterval(() => {
        updateKeywords().catch(error => console.error('Error in interval:', error));
    }, 1500);
    
    updateKeywords().catch(error => console.error('Error in initial call:', error));
