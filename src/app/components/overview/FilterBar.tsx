import React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import possibleTags from '@/utils/tags';
// ... (imports and other code)

function FilterBar() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="mx-2 pt-20">
      <div className="fixed border border-gray-200 p-4 rounded">
        <h4>Filters</h4>
        <div className={cn('grid gap-2')}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={'outline'}
                className={cn(
                  'justify-start text-left font-normal w-full', // Adjust width to 100%
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, 'LLL dd, y')} -{' '}
                      {format(date.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(date.from, 'LLL dd, y')
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="m-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a tag" />
            </SelectTrigger>
            <SelectContent>
              {possibleTags.map((tag) => (
                <SelectItem key={tag.id} value={tag.name}>
                  <span
                    className={cn(
                      'rounded-md py-1 text-xs font-medium',
                      `${tag.color}`
                    )}
                  >
                    {tag.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
